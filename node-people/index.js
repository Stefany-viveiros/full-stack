const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

//Indicar para express ler body com json


//criando Funções Auxiliares
//Retornar o objeto por ID
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
}

function bucarNomeTimes(id) {
    return times.filter((time) => time.id == id)
}

// Pegar a posiçãoo ou index do elemento do Array por id
//findindex - javaScript

function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id);
}

function buscarIdTimes(id) {
    return times.findIndex((time) => time.id == id);
}
//Rota Teste
app.get("/teste", (req,res) => {
    res.send("API nodePeople está funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

//Buscando nomes
app.get("/listaNomes", (req,res) => {
    res.send(nomes)
});

//Buscando times
app.get("/listaTimes", (req, res) =>{
    res.send(times)
});

//Buscando por times(id)
app.get("listaTimes", (req, res) => {
    let index = req.params.id;
    res.json(bucarNomeTimes(index))
})
//Buscando por ID

app.get("/listaNomes/:id", (req, res) =>{
    let index = req.params.id;

    res.json(buscarNomePorId(index))
});


//Criando Post para cadastrar
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nomes Cadastrados com sucesso!')
});

app.post("/listaTimes", (req, res) => {
    times.push(req.body);
    res.status(201).send('Times cadastrados com sucesso!!!')
})

//Criando rota excluir
app.delete("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes com id:${req.params.id} excluida com sucesso!`)
    
});
   
app.delete("/listaTimes/:id", (req, res) => {
    let index=buscarIdTimes(req.params.id);
    times.splice(index, 1);
    res.send(`Times com id:${req.params.id} excluido com sucesso` )
});

app.get("/", (req, res) => {
    res.send("Bem vindos!!!!")
});

// Rota alterar
app.put("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes[index].nome = req.body.nome;
    nomes[index].idade = req.body.idade;

    res.json(nomes);
});

app.put("/listaTimes/:id", (req, res) => {
    let index = buscarIdTimes(req.params.id);
    times[index].nome = req.body.nome;
    times[index].estado = req.body.estado;
    times[index].titulos = req.body.titulos;
    

    res.json(times);
});