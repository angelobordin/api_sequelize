const database = require('../../models')

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAllRegisters(filter = {}) {
        try {
            return database[this.modelName].findAll({filter});
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRegisterById(id) {
        try {
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async createOrUpdateRegister(newRegister, id) {
        try {
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteRegister(id) {
        try {
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async restoreRegister(id) {
        try {
            
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Services;
