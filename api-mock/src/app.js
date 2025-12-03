import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("Olá Node js");
});

export default app;

app.use(express.json());


const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

function buscarIdCadastros(id) {
    return cadastros.filter((cadastro) => cadastro.id == id)
}

function buscarNomeCadastro (id) {
    return cadastros.findIndex((cadastro) => cadastro.id == id)
}
//buscando cadastro
app.get("/cadastros", (req, res) => {
    res.send(cadastros)
});

//Buscando por id
app.get("/cadastros", (req, res) => {
    let index = req.params.id;
    res.json(buscarIdCadastros(index))
});

//Para deletar id
app.delete("/cadastros/:id", (req, res) => {
    let index =buscarNomeCadastro(req.params.id);
    cadastros.splice(index, 1);
    res.send(`Cadastros com id:${req.params.id} excluidos com sucesso!`)
});

//Criando POST para cadastrar
app.post("/cadastros", (req, res) => {
    cadastros.push(req.body);
    res.status(201).send(`Cadastro adicionado com sucesso!!`)
})

//Criando put para cadastros
app.put("/cadastros/:id", (req, res) => {
    let index = buscarNomeCadastro(req.params.id)
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email=req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].cidade = req.body.cidade;

    res.json(cadastros);
})