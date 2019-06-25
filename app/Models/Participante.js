'use strict'

const Model = use('Model')

class Participante extends Model {

    encontro() {
        return this.belongsTo('App/Models/Encontro');
    }
}

module.exports = Participante;
