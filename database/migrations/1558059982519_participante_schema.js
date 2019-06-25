'use strict'

const Schema = use('Schema');

class ParticipanteSchema extends Schema {
  up() {
    this.create('participantes', (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('participantes');
  }
}

module.exports = ParticipanteSchema;
