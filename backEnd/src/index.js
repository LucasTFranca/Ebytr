const express = require('express');
const router = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
var cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`))
