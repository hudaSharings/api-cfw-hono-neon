import { pgTable, text } from "drizzle-orm/pg-core";
import { auditSchema } from "./audit";

export const tableName = 'users';

export const tableDefinition = {
  userName: text('userName'),
  name:text('name'),
  email:text('email'),
  mobileNumber:text('mobileNumber'),
  password:text('password'),
  userType:text('userType')
};

export const users = pgTable(tableName,{
    ...tableDefinition ,
    ...auditSchema
});

export default users
