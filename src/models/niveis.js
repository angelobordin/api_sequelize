'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    name: DataTypes.STRING
  }, { paranoid: true }); // Param for not delete registers completly
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, { foreignKey: 'levelId' });
  };
  return Niveis;
};