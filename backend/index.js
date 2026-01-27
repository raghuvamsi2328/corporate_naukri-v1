const express = require('express');
const app = express();
app.get('/health', (req, res) => res.send('Backend is Alive!'));
app.listen(5000, () => console.log('Server on 5000'));