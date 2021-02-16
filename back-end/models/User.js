const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'Users',
      {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cpf: DataTypes.STRING,
      },
      { timestamps: false },
    );
  
    return User;
  };
  
  module.exports = UserModel;
  