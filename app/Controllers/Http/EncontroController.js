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
    } catch (e) {
      response.status(400).send({ success: false, message: "Erro ao obter patrimônios.", error: e.message });
    }

  }

  /**
   * Create/save a new encontro.
   * POST Encontro
   */
  async store({ request, response }) {
    // console.log(request.all());
    const data = request.all();

    try {
      const createdData = await Encontro.create(data);
      response.status(201).send(createdData);
    } catch (e) {
      console.log(e);
      response.status(400).send("Erro ao cadastrar patrimônio.");
    }
  }

  /**
   * Display a single encontro.
   * GET Encontro/:id
   */
  async show({ params, request, response, view }) {
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
  async destroy({ params, request, response }) {
  }
}

module.exports = EncontroController;