import { BaseEntity } from "./baseEntity";

export class organization extends BaseEntity<organization>{
	setDb(env: Env): organization {
		this.dbUrl=env.DATABASE_URL
		return this;
	}

	protected tableName: string="organizations"
}
