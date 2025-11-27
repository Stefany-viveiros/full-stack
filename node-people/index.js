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

// Pegar a posiçãoo ou index do elemento do Array por id
//findindex - javaScript

function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id);
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



//Criando rota excluir
app.delete("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes.splice(index, 1);
    res.send(`Nomes com id:${req.params.id} excluida com sucesso!`)
    
});
   

app.get("/", (req, res) => {
    res.send("Bem vindos!!!!")
});