const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);


/**
 * Tipos de parametros:
 * 
 * Query params: Parametros nomeados enviados na rota apos o "?", (filtro, paginação)
 * Route params: Parametros utilizados para indentificar recursos
 * Request body: Corpo da requisição, ultilizado para criar ou alterar recursos
 */


app.listen(3333);
