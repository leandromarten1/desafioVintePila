const router = require('express').Router();
const { User } = require('../models');

// Get all users
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

// Create user
router.post('/', async (req, res) => {
  try {
    const { nome, sobrenome, email, password, telefone, cpf } = req.body;
    const user = User.create({
      nome,
      sobrenome,
      email,
      password,
      telefone,
      cpf,
    });
    // criar o token e mandar o token
    return res.status(201).json({ message: 'Usuário criado' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não existe' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.user;
    await User.destroy({ where: { id } });
    return res.status(204).json({ message: 'Usuário excluido' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

module.exports = router;
