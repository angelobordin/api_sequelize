const Services = require('../services/Services.js');
const pessoasServices = new Services('Pessoas');

class PessoasController {

    static async getPeopleList(req, res) {
        try {
            const result = await pessoasServices.getAllRegisters();
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

    static async cancelPerson(req, res) {
        try {
            database.sequelize.transaction(async t => { //create transaction for confirm updates on database
                const idParam = req.params.id;
                await database.Pessoas.update({active: false}, {
                    where: {
                        id: Number(idParam)
                    }
                }, { transaction: t });

                await database.Matriculas,update({status: 'cancelado'}, {
                    where: {
                        studantId: Number(idParam)
                    }
                }, { transaction: t });

                return res.status(200).json({
                    message: `User and register canceled sucessful`,
                    status: 200
                }) 
            })
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = PessoasController;