const express = require('express');

const app = express();

const routes = require('./routes');

const cors = require('cors');

/*Definir que usará JSON para o corpo das requisições*/
app.use(express.json());

/**
 * Rotas / Recursos
 */

/**
 *Métodos http
 *
 * GET: Buscar/listar uma informaçõe no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado parar criar ou alterar recursos
 */

/**
 * Bancos de dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Comunicação:
 * Driver: SELECT * FROM USERS
 * Query Builder: table('users').select('*').where()
 */

app.use(cors(/*{
    origin: 'sua url'; // se estiver em alguma url
}*/));

app.use(routes);

app.get('/hi', (request, response) =>{
    return response.send('Hello World');
});

app.listen(3333);
