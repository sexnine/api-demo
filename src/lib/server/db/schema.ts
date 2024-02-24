import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable('messages', {
    id: integer('id').primaryKey({ autoIncrement:true }),
    author: text('author').notNull(),
    content: text('content').notNull(),
});
