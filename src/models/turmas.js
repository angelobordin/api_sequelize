'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    start: DataTypes.DATEONLY
  }, { paranoid: true }); // Param for not delete registers completly
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, { foreignKey: 'classId' });
    Turmas.belongsTo(models.Pessoas, { foreignKey: 'teacherId' });
    Turmas.belongsTo(models.Niveis, { foreignKey: 'levelId' });
  };
  return Turmas;
};