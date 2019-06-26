'use strict';

const Model = use('Model');

class Encontro extends Model {
    participantes() {
        return this.hasMany('App/Models/Participante');
    }
}

module.exports = Encontro;
