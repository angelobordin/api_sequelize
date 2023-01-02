const database = require('../models/index.js');

class PessoasService {
    static async getPeople(req, res) {
        try {
            const result = await database.Pessoas.findAll();
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
                const newData = await database.Pessoas.update(data, {
                    where: { id: Number(idParam) }
                });

                return res.status(200).json({
                    message: `User ${idParam} updated successful`,
                    status: 200
                });
            } else {
                await database.Pessoas.create(data);

                return res.status(200).json({
                    message: 'User created successful',
                    status: 200
                });
            }
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
}

module.exports = PessoasService 