const database = require('../../models'); // import inde.js
const Services = require("./Services");

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.PessoasService = new Services('Pessoas');
        this.MatriculasService = new Services('Matriculas');
    }

    // Service for create specific functions for table 'turmas';
    async cancelPersonById(personId) {
        try {
            const filter = { id: Number(personId )};
            // create transaction to guarantee integrity of data
            return await database.sequelize.transaction(async t => {
                const newStatus = { active: false };
                await this.PessoasService.updateRegister(newStatus, filter, t);

                const status = { status: 'cancelado' };
                await this.MatriculasService.updateRegister(status, filter, t)
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = PessoasServices;
