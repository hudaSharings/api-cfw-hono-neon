import { neon } from '@neondatabase/serverless';
import { executeQry } from '../database';
import { deleteQuery, insertQuery, selectQuery, updateQuery } from '../sqlQueries';
import { drizzle } from 'drizzle-orm/neon-http';

export abstract class BaseEntity<T> {
    protected abstract tableName: string;
    protected dbUrl: string;
	protected orgId: string;
	abstract setDb(Env:Env):T;
	constructor(orgId: string,dburl:string) {
        this.orgId = orgId;
		this.dbUrl=dburl;
    }
    async select(columns: string[] = ['*'],conditions: any = {}, orderBy: string = 'id DESC'): Promise<any[]> {
		const conditionsWithOrgId = { ...conditions, orgId: this.orgId };
        const sqlQry = selectQuery(this.tableName,columns, conditionsWithOrgId, orderBy);
		const sql = neon(this.dbUrl)
		const db = drizzle(sql)
		const result = await sql`${sqlQry}` ;
		return result
    }

    async insert(data: any): Promise<any> {
		const dataWithOrgId = { ...data, orgId: this.orgId };
        const sql = insertQuery(this.tableName, dataWithOrgId);
        return await executeQry(this.dbUrl,sql);
    }

    async update(id: number, data: any): Promise<any> {
		const dataWithOrgId = { ...data, orgId: this.orgId };
        const sql = updateQuery(this.tableName, id, dataWithOrgId);
        return await executeQry(this.dbUrl,sql);
    }

    async delete(id: number): Promise<any> {
        const sql = deleteQuery(this.tableName, id);
        return await executeQry(this.dbUrl,sql);
    }
}


