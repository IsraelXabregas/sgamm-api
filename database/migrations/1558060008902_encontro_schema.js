'use strict'

const Schema = use('Schema');

class EncontroSchema extends Schema {
  up() {
    this.create('encontros', (table) => {
      table.increments().primary();
      table.integer('participantes_id').unsigned().references('id').inTable('participantes');
      table.string('titulo', 50).notNullable();
      table.text('descricao').notNullable();
      table.date('data').nullable();
      table.time('hora').nullable();
      table.string('organizador', 40).nullable();
      table.string('telefone_organizador', 15).nullable();
      table.string('local', 40).notNullable();
      table.string('endereco', 50).notNullable();
      table.string('bairro', 30).notNullable();
      table.string('cidade', 32).notNullable();
      table.string('estado', 20).notNullable();
      table.string('pais', 20).notNullable();
      table.enu('situacao', ['REALIZADO', 'CONFIRMADO', 'PENDENTE', 'CANCELADO']).defaultTo('PENDENTE').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('encontros');
  }
}

module.exports = EncontroSchema;