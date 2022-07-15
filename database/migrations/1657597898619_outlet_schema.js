'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OutletSchema extends Schema {
  up () {
    this.create('outlets', (table) => {
      table.increments()
      table.string('id_outlet', 11)
      table.string('name', 50)
      table.text('address')
      table.string('phone', 15)
      table.string('id_salesman', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('outlets')
  }
}

module.exports = OutletSchema
