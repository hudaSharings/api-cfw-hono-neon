import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { Hono } from 'hono'
import organizations from './db/schema/organization';
import { organization } from './db/entity/organization';

export type Env ={
	DATABASE_URL:string
}

const app = new Hono<{Bindings:Env}>();

app.get('/',async (c)=>{

	const sql = neon(c.env.DATABASE_URL)
	const orgs = await sql`SELECT * FROM organizations` ;
	const db = drizzle(sql)
	//const orgs = await db.select().from(organizations)
		const or =  new organization('fts',c.env.DATABASE_URL);
const r=await or.select();
	return c.json(or)
})

export default app
