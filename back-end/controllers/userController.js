const router = require('express').Router();
const { User } = require('../models');
const createToken = require('../middlewares/createToken');
const auth = require('../middlewares/auth');

// Get all users
router.get('/', auth, async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

// Create user
router.post('/', auth, async (req, res) => {
  try {
    const { nome, sobrenome, email, password, telefone, cpf } = req.body;
    const user = await User.create({
      nome,
      sobrenome,
      email,
      password,
      telefone,
      cpf,
    });
    return res.status(201).json({ message: 'Usuário criado' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

// Get user by ID
router.get('/:id', auth, async (req, res) => {
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

//Update user
router.put('/:id', auth, async (req, res) => {
  try {
    const { nome, sobrenome, email, password, telefone, cpf } = req.body;
    const { id } = req.params;

    // Verifica se existe usuário antes de atualizar
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    await User.update(
      { nome, sobrenome, email, password, telefone, cpf },
      { where: { id } },
    );

    return res.status(200).json({ message: 'Usuário atualizado' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

// Delete user by id
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    await User.destroy({ where: { id } });
    return res.status(200).json({ message: 'Usuário excluido' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

module.exports = router;
