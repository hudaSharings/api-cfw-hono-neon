import {  pgTable, text,integer } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";

export const tableName = 'organizationUsers';

export const tableDefinition = {
  organizationId: integer('organizationId'),
  username:text('userName'),
  isDefault:integer('isDefault')
};

export const organizationUsers = pgTable(tableName,{
    ...tableDefinition ,
    ...auditSchema
});

export default organizationUsers

