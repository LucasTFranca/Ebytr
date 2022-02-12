const express = require('express');
const router = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(router);

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`))
