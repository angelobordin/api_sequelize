'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    name: {
      type: DataTypes.STRING,
      validate: { // Validation with function
        validateName: function(name) {
          if (name.length <= 3) throw new Error(`Length of name need bigger than 3 characters`)
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: { // Validation
        isEmail: { // if field is a valid email
          args: true,
          msg: 'Data of type E-mail is invalid' // Message for return case data is invalid
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true, // Param for not delete registers completly
    // defaultScope: { // Sets default params for return of database
    //   where: { active: true } // Only register with column active = true will be returned
    // },
    // scope: {
    //   todos: { 
    //     where: {} // All registers will be returned 
    //   }
    // }
  });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Matriculas, { foreignKey: 'studantId' });
    Pessoas.hasMany(models.Turmas, { foreignKey: 'teacherId' });
  };
  return Pessoas;
};
