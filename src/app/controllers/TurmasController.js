const Sequelize = require('sequelize');
const operators = Sequelize.Op;
const TurmasServices = require('../services/TurmasService.js');
const service = new TurmasServices();

class TurmasController {
    static async getTurmasList(req, res) {
        try {
            const initialDate = req.query.initDate;
            const finalDate = req.query.finalDate;
            let where = {};

            if (initialDate || finalDate) {
                where = { start: {
                        [operators.lte]: finalDate ?? null,
                        [operators.gte]: initialDate ?? null
                    }
                }
            }

            const turmasList = await service.getAllRegisters(where);
            return res.status(200).json(turmasList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getTurmasById(req, res) {
        try {
            const idParam = req.params.id;
            const result = await service.getRegisterById(idParam);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createOrUpdateTurma(req, res) {
        try {
            const idParam = req.params.id ?? null;
            const data = req.body;
            
            if (idParam) {
                const filter = {
                    id: Number(idParam)
                };
                await service.updateRegister(data, filter);
                return res.status(200).json({
                    message: `Class ${idParam} updated successful`,
                    status: 200
                });
            }

            await service.createRegister(data);
            return res.status(200).json({
                message: `Class created sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteTurma(req, res) {
        try {
            const idParam = req.params.id;
            const filter = { id: Number(idParam) };
            await service.deleteRegister(filter);

            return res.status(200).json({
                messsage: `Class ${idParam} deleted sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreTurma(req, res) {
        try {
            const { id } = req.params;
            const filter = { id: Number(id) };
            await service.restoreRegister(filter);

            return res.status(200).json({
                message: `Class ${id} restored sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmasController;