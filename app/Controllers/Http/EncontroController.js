'use strict'

const Encontro = use("App/Models/Encontro");

class EncontroController {
  /**
   * Show a list of all Encontro.
   * GET Encontro
   */
  async index({ response }) {
    try {
      const encontroData = await Encontro.all();
      response.status(200).send(encontroData);
    } catch (exception) {
      response.status(400).send({ success: false, message: "Erro ao obter patrimônios.", error: exception.message });
    }

  }

  /**
   * Create/save a new encontro.
   * POST Encontro
   */
  async store({ request, response }) {
    const data = request.all();
    data.data = data.data.split('/').reverse().join('-'); // Convert data to SQL format

    try {
      const createdData = await Encontro.create(data);
      response.status(201).send(createdData);
    } catch (exception) {
      response.status(400).send({ success: false, message: "Erro ao cadastrar patrimônio.", error: exception.message });
    }
  }

  /**
   * Display a single encontro.
   * GET Encontro/:id
   */
  async show({ params, request, response }) {
  }

  /**
   * Update encontro details.
   * PUT or PATCH Encontro/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a encontro with id.
   * DELETE Encontro/:id
   */
  async destroy({ params, response }) {
    const { id } = params;

    try {
      const encontroForDelete = await Encontro.findOrFail(id);
      await encontroForDelete.delete();
      response.status(200).send({ success: true, message: "Encontro removido com sucesso.", deletedId: encontroForDelete.id });
    } catch (exception) {
      response.status(400).send({ success: false, message: "Erro ao remover encontro.", error: exception.message });
    }

  }
}

module.exports = EncontroController;