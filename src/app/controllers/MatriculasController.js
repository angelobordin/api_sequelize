const MatriculasServices = require('../services/MatriculasService');
const service = new MatriculasServices(); 

class MatriculasController {
    static async getMatriculasList(req, res) {
        try {
            const result = await service.getAllRegisters()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculasById(req, res) {
        try {
            const personId = req.params.matId;
            const result = await service.getRegisterById(personId);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getMatriculasByStudantId(req, res) {
        try {
            const studantId = req.params.id;
            const filter = {
                studantId: Number(studantId)
            }
            const result = await service.getAllRegisters(filter);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createOrUpdateMatriculaByPersonId(req, res) {
        try {
            const matriculaId = req.params.matId ?? null;
            const studantId = req.params.id ?? null;
            const newData = { ...req.body, studantId: Number(studantId) };

            if (matriculaId) {
                const filter = {
                    id: Number(matriculaId),
                    studantId: Number(studantId)
                };
                await service.updateRegister(newData, filter);

                return res.status(200).json({
                    message: `Register updated sucessful`,
                    status: 200
                })
            }

            await service.createRegister(newData);
            return res.status(200).json({
                message: `Register created sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula(req, res) {
        try {
            const matriculaId = req.params.matId;
            await database.Matriculas.destroy({
                where: { id: Number(matriculaId) }
            });

            return res.status(200).json({
                message: `Register ${matriculaId} deleted sucessful`,
                status: 200
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async restoreMatricula(req, res) {
        try {
            const personID = req.params.id;
            const matriculaID = req.params.matId;
            await database.Matriculas.restore({
                where: {
                    id: matriculaID,
                    studantId: personID
                }
            })

            return res.status(200).json({
                message: `Register ${matriculaID} restored sucesful`,
                status: 200
            })
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = MatriculasController;
