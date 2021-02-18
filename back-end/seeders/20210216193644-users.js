module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        nome: 'admin',
        sobrenome: 'VintePila',
        email: 'admin@admin.com',
        password: '123456',
        telefone: '(48)99999-9999',
        cpf: '123.123.123-12'
      },
      {
        id: 2,
        nome: 'Michael',
        sobrenome: 'Schumaer',
        email: 'MichaelSchumacher@gmail.com',
        password: '123456',
        telefone: '(48)88888-8888',
        cpf: '321.321.321-32'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};