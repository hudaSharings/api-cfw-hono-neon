import { defineConfig } from "drizzle-kit";
import { config } from 'dotenv';
config({ path: '.dev.vars' });
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/db/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: `${process.env.DB_URL}`,
  }
});
