const express = require('express');

const app = express();

app.get('/hello', (request, response) =>{
    return response.send('Hello World');
});
app.get('/json', (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Eric Binsfeld'
    });
});

app.listen(3333);
