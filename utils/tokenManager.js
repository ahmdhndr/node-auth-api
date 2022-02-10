const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    const accessToken = bearerHeader.split(' ')[1];
    req.token = accessToken;
    next();
  } else {
    res.status(403).json({
      status: 'fail',
      message: 'Not authorized user!',
    });
  }
};

module.exports = { generateToken, verifyToken };
