const express = require("express");
const app = express();
const PORT = 3000;


// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];


//criando Funções Auxiliares
//Retornar o objeto por ID
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
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
})

//Buscando por ID
app.get("/listaNomes/:id", (req, res) =>{
    let index = req.params.id;

    res.json(buscarNomePorId(index))
})

app.get("/", (req, res) => {
    res.send("Bem vindo!!!!")
})