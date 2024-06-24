CREATE TABLE IF NOT EXISTS "organizations" (
	"name" text,
	"shortCode" text,
	"shortCodeKey" text,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organizationUsers" (
	"organizationId" integer,
	"userName" text,
	"isDefault" integer,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"userName" text,
	"name" text,
	"email" text,
	"mobileNumber" text,
	"password" text,
	"userType" text,
	"id" serial PRIMARY KEY NOT NULL,
	"createdOn" timestamp DEFAULT now(),
	"createdBy" text,
	"updatedOn" date,
	"updatedby" text,
	"orgId" text
);
