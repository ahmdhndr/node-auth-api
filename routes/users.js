const express = require('express');
const { generateToken } = require('../utils/tokenManager');
const router = express.Router();

router.post('/login', (req, res) => {
  // Dummy user
  const user = {
    id: 1,
    username: 'erudev',
    fullname: 'Eru Dev',
  };

  const accessToken = generateToken({ user });
  res.status(200).json({
    status: 'success',
    data: {
      accessToken,
    },
  });
});

module.exports = router;
