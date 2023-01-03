'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    name: DataTypes.STRING
  }, { paranoid: true });
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, { foreignKey: 'levelId' });
  };
  return Niveis;
};