
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('milestones', table => {
    table.increments('id').primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('milestones', table => {
    table.dropColumn('id')
  })
};
