
class MatriculasController {
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

module.exports = MatriculasController;
