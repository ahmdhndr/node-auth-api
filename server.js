const dotenv = require('dotenv');
const express = require('express');
const userRoute = require('./routes/users');
const noteRoute = require('./routes/notes');

dotenv.config();

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'API berjalan...',
  });
});

// Routes
app.use('/api/users', userRoute);
app.use('/api/notes', noteRoute);

app.listen(5000, () => console.log('Server berjalan pada port 5000'));
