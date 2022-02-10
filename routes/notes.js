const express = require('express');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/tokenManager');

const router = express.Router();

router.post('/', verifyToken, (req, res) => {
  try {
    const { id, iat, exp } = jwt.verify(req.token, process.env.JWT_SECRET);
    const { user } = id;
    res.status(201).json({
      status: 'success',
      message: 'Catatan berhasil dibuat',
      data: {
        user,
        iat,
        exp,
      },
    });
  } catch (error) {
    res.status(403).json({ status: 'fail', message: 'Not authorized user!' });
  }
});

module.exports = router;
