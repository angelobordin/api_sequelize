const database = require('../../models')

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAllRegisters(filter = {}) {
        try {
            return await database[this.modelName].findAll({ where: { ...filter } });
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRegisterById(id) {
        try {
            return await database[this.modelName].findOne({
                where: { id: Number(id) }
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async createRegister(data) {
        try {
            return await database[this.modelName].create(data);
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateRegister(newData, filter, transaction = {}) {
        try {
            return await database[this.modelName].update({ ...newData }, {
                where: { ...filter }
            }, { transaction: transaction });
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteRegister(filter) {
        try {
            return await database[this.modelName].destroy({
                where: { ...filter }
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async restoreRegister(filter) {
        try {
            return await database[this.modelName].restore({
                where: { ...filter }
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Services;
