'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Matriculas, { foreignKey: 'teacherId' });
    Pessoas.hasMany(models.Turmas, { foreignKey: 'studantId' });
  };
  return Pessoas;
};