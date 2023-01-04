const database = require('../models/index.js');

class PessoasService {
    static async getPeople(req, res) {
        try {
            const result = await database.Pessoas.scope('todos').findAll();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getPeopleById(req, res) {
        try {
            const idParam = req.params.id;
            const result = await database.Pessoas.findOne({
                where: { id: Number(idParam) }
            });

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async createOrUpdatePerson(req, res) {
        try {
            const idParam = req.params.id ?? null;
            const data = req.body;

            if (idParam) {
                await database.Pessoas.update(data, {
                    where: { id: Number(idParam) }
                });

                return res.status(200).json({
                    message: `User ${idParam} updated successful`,
                    status: 200
                });
            }
            await database.Pessoas.create(data);
            return res.status(200).json({
                message: 'User created successful',
                status: 200
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        try {
            const idParam = req.params.id;
            await database.Pessoas.destroy({
                where: { id: Number(idParam) }
            });

            return res.status(200).json({
                message: `User ${idParam} deleted sucessful`,
                status: 200
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async restorePerson(req, res) {
        try {
            const id = req.params.id;
            await database.Pessoas.restore({
                wherer: { id: Number(id) }
            })

            return res.status(200).json({
                message: `User ${id} restored sucessful`,
                status: 200
            })
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async getMatriculaByPersonId(req, res) {
        try {
            const personId = req.params.id;
            const result = await database.Matriculas.findAll({
                where: { studantId: Number(personId) }
            })

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
                await database.Matriculas.update(newData, {
                    where: {
                        id: Number(matriculaId),
                        studantId: Number(studantId)
                    }
                })

                return res.status(200).json({
                    message: `Register updated sucessful`,
                    status: 200
                })
            }
            await database.Matriculas.create(newData);

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

module.exports = PessoasService;