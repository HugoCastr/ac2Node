const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));

const professorRoute = require('./routes/professor');

app.use('/professores', professorRoute);