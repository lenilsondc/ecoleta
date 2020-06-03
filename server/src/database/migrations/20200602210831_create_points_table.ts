import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary().notNullable();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("item");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("point_items");
}
