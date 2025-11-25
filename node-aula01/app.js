const express = require("express");
const app = express();
const port = 3000;

//Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.static('img'))
//Variavel comos dados produtos
const produtos = [
    { id: 1, nome: "Produto A", preco: 100 },
    { id: 2, nome: "Produto B", preco: 150 },
    { id: 3, nome: "Produto C", preco: 200 },
];

const times = [
    {id: 1, nome: "Santos", ano: 1912 },
    {id: 2, nome: "Bangu", ano: 1900 },
    {id: 3, nome: "Flamengo", ano: 1910 },
    {id: 4, nome: "Mirasol", ano: 1904 },
];
// Criar função 
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem Vindo ao servidor Node.js ');
});


//Rota de produto

app.get('/produtos', (req, res) => {
    res.send(produtos);
})
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

//Rota Home
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
});

//Rota times
app.get('/times', (req, res) => {
    res.send(times);
})

