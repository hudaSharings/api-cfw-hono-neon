import { neon } from "@neondatabase/serverless";

// export async function getDatabase(dbUrl:string) {

// 	const sql = neon(dbUrl)
// 	//const orgs = await sql`SELECT * FROM organizations` ;
// 	return await sql
// }

export async function executeQry(dburl:string,qry:string):Promise<any> {
	const sql = neon(dburl)
	const result = await sql`${qry}` ;
	return result
}
