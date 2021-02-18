const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const secret = 'vintePila';
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Token inválido' });
  }
};

module.exports = auth;
