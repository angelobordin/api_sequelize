'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, { paranoid: true }); // Param for not delete registers completly
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.Pessoas, { foreignKey: 'studantId' });
    Matriculas.belongsTo(models.Turmas, { foreignKey: 'classId' });
  };
  return Matriculas;
};