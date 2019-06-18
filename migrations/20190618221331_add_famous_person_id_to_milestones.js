exports.up = function(knex, Promise) {
  return knex.schema.alterTable('milestones', table => {
    table.biginteger('famous_person_id').references('id').inTable('famous_people')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('milestones', table => {
    table.dropColumn('famous_person_id')
  })
};
