const PessoasServices = require('../services/PessoasService.js');
const service = new PessoasServices();

class PessoasController {
    static async getPeopleList(req, res) {
        try {
            const result = await service.getAllRegisters();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getPeopleById(req, res) {
        try {
            const id = req.params.id;
            const result = await service.getRegisterById(id);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async createOrUpdatePerson(req, res) {
        try {
            const id = req.params.id ?? null;
            const data = req.body;

            if (id) {
                const filter = { id: Number(id) };
                await service.updateRegister(data, filter);

                return res.status(200).json({
                    message: `User ${id} updated successful`,
                    status: 200
                });
            }

            await service.createRegister(data);
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
            const id = req.params.id;
            await service.deleteRegister(id);

            return res.status(200).json({
                message: `User ${id} deleted sucessful`,
                status: 200
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async restorePerson(req, res) {
        try {
            const id = req.params.id;
            await service.restoreRegister(id);

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
            const id = req.params.id;
            
            await service.cancelPersonById(id);
            return res.status(200).json({
                message: `User and register canceled sucessful`,
                status: 200
            }) 
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = PessoasController;