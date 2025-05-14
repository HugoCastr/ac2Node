const express = require('express');
const professorRoute = require('./routes/professor');

const app = express();
app.use('/professor', professorRoute);
app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));