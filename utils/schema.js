import { integer, numeric, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Budgets = pgTable('budgets', {
    id: serial('id').primaryKey(),
    user_id: varchar('user_id').notNull(),
    name: varchar('name').notNull(),
    icon: varchar('icon'),
    amount: integer('amount').notNull(),
    createdBy: varchar('createdBy').notNull(),
})

export const Expenses = pgTable('expenses', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    user_id: varchar('user_id').notNull(),
    amount: integer('amount').notNull().default(0),
    budgetId: integer('budgetId').references(() => Budgets.id),
    createdAt: varchar('createdAt').notNull(),
})