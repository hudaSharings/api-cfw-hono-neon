import { pgTable, text } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";

export const tableName = 'organizations';

export const tableDefinition = {
  name: text('name'),
  shortCode:text('shortCode'),
  shortCodeKey:text('shortCodeKey')
};

export const organizations = pgTable(tableName,{
    ...tableDefinition ,
    ...auditSchema
});

export default organizations
