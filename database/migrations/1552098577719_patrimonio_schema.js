'use strict'

const Schema = use('Schema')

class PatrimonioSchema extends Schema {
  up() {
    this.create('patrimonios', (table) => {
      table.increments()
      table.string('codigo', 7).notNullable()
      table.string('descricao', 100).notNullable()
      table.date('data_aquisicao').notNullable()
      table.string('local', 50).notNullable()
      table.enu('origem', ['Doação', 'Comprado', 'Empréstimo']).notNullable()
      table.string('ddv', 100).notNullable()
      table.enu('situacao', ['Ativo', 'Baixado']).notNullable().defaultTo('Ativo')
      table.enu('motivo_baixa', ['Venda', 'Doação', 'Inutilização']).nullable()
      table.date('data_baixa').nullable()
      table.string('obs_baixa', 100).nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('patrimonios')
  }
}

module.exports = PatrimonioSchema