const database = require('../models/index.js');

class TurmasService {
    static async getTurmasList(req, res) {
        try {
            const turmasList = await database.Turmas.findAll();
            return res.status(200).json(turmasList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getTurmasById(req, res) {
        try {
            const idParam = req.params.id;
            const result = await database.Turmas.findOne({
                where: { id: Number(idParam) }
            });

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
                await database.Turmas.update(data, {
                    where: { id: Number(idParam) }
                });

                return res.status(200).json({
                    message: `Class ${idParam} updated successful`,
                    status: 200
                });
            }

            await database.Turmas.create(data);
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
            await database.Turmas.destroy(data, {
                where: { id: Number(idParam) }
            })

            return res.status(200).json({
                messsage: `Class ${idParam} deleted sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmasService;