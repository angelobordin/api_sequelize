'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    start: DataTypes.DATEONLY
  }, { paranoid: true });
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, { foreignKey: 'classId' });
    Turmas.belongsTo(models.Pessoas, { foreignKey: 'studantId' });
    Turmas.belongsTo(models.Niveis, { foreignKey: 'levelId' });
  };
  return Turmas;
};