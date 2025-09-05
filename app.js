const express = require('express');

const app = express();

const PORT = 3000;

app.get('/',(req,res) => {
    res.send('Bem vindo ao teste!!!!');
});

app.get('/sobre',(req,res) => {
    console.log("Testando");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}/sobre`);
    console.log(`Para parar o servidor, pressione cntr + C no terminal`)
}
);

const testes  = [
    {
    'id':testes,
    'preco':1200
    },
    {
        'id':testes,
        'preco':7800
    }
];

app.get('/api/produtos',(req,res) => {
    res.json(testes);
});