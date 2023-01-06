const NiveisServices = require('../services/NiveisService.js');
const service = new NiveisServices();

class NiveisController {
    static async getNiveisList(req, res) {
        try {
            const niveisList = await service.getAllRegisters();
            return res.status(200).json(niveisList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getNiveisById(req, res) {
        try {
            const idParam = req.params.id;
            const result = await database.Niveis.findOne({
                where: { id: Number(idParam) }
            });

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createOrUpdateNivel(req, res) {
        try {
            const idParam = req.params.id ?? null;
            const data = req.body;
            
            if (idParam) {
                await database.Niveis.update(data, {
                    where: { id: Number(idParam) }
                });

                return res.status(200).json({
                    message: `Class Nivel ${idParam} updated successful`,
                    status: 200
                });
            }

            await database.Niveis.create(data);
            return res.status(200).json({
                message: `Class Nivel created sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteNivel(req, res) {
        try {
            const idParam = req.params.id;
            await database.Niveis.destroy({
                where: { id: Number(idParam) }
            })

            return res.status(200).json({
                messsage: `Class Nivel ${idParam} deleted sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restoreNivel(req, res) {
        try {
            const { id } = req.params;
            await database.Niveis.restore({
                where: { id: Number(id) }
            })

            return res.status(200).json({
                message: `Class Nivel ${id} restored sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NiveisController;
