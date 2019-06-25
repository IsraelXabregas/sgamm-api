"use strict";

const Patrimonio = use("App/Models/Patrimonio");

class PatrimonioController {
  /**
   * Show a list of all patrimonios.
   * GET patrimonios
   *
   * @param {Response} ctx.response
   */
  async index({ response }) {
    try {
      const patrimonios = await Patrimonio.all();
      response.status(201).send(patrimonios);
    } catch (e) {
      response.status(400).send("Erro ao obter patrimônios.");
    }
  }

  /**
   * Create/save a new patrimonio.
   * POST patrimonios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      "codigo",
      "descricao",
      "data_aquisicao",
      "local",
      "origem",
      "ddv"
    ]);
    try {
      const create = await Patrimonio.create(data);
      response.status(201).send(create);
    } catch (e) {
      response.status(400).send("Erro ao cadastrar patrimônio.");
    }
  }

  /**
   * Display a single patrimonio.
   * GET patrimonios/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ params, response }) {
    const { id } = params;

    try {
      const patrimonio = await Patrimonio.findOrFail(id);
      response.status(200).send(patrimonio);
    } catch (e) {
      if (e.name == "ModelNotFoundException") {
        response.status(400).send("Patrimônio não encontrado.");
      } else {
        response.status(400).send("Erro ao obter patrimônio.");
      }
    }
  }

  /**
   * Update patrimonio details.
   * PUT or PATCH patrimonios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;

    const data = request.only([
      "codigo",
      "descricao",
      "data_aquisicao",
      "local",
      "origem",
      "ddv",
      "situacao",
      "motivo_baixa",
      "obs_baixa",
      "data_baixa"
    ]);

    try {
      const patrimonio = await Patrimonio.findOrFail(id);

      patrimonio.merge(data);
      const update = await patrimonio.save();

      response.status(200).send(update);
    } catch (e) {
      response.status(400).send("Erro ao atualizar patrimônio.");
    }
    console.log(data);
  }

  /**
   * Delete a patrimonio with id.
   * DELETE patrimonios/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const { id } = params;
    try {
      const patrimonio = await Patrimonio.find(id);
      await patrimonio.delete();
      response.status(200).send("Patrimonio removido com sucesso");
    } catch (e) {
      response.status(400).send("Erro ao remover patrimônio.");
    }
  }
}

module.exports = PatrimonioController;
