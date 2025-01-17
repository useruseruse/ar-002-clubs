import {
  mysqlTable,
  int,
  varchar,
  date,
  timestamp,
} from "drizzle-orm/mysql-core";

export const Notice = mysqlTable("notice", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 50 }).notNull(),
  author: varchar("author", { length: 30 }).notNull(),
  date: date("date").notNull(),
  link: varchar("link", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  deletedAt: timestamp("deleted_at"),
});
