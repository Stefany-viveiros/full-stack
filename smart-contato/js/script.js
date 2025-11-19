const form= document.querySelector("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone")
const lista = document.querySelector(".lista")
const listaMsg = document.querySelector(".lista-msg")

form.addEventListener("submit", function(event){
    event.preventDefault();



    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value== "") {
        alert("Preencha todos os campos");
        alert("Campo(a) vazio, preencha os campos")
        return false;
    }
    // Condição, para retirar a li >.lista.msg
    // se(listamsg=== true)


    if(listaMsg) {
        console.log(listaMsg.remove());
    }
        
    console.log("Nome", inputNome.value);
    console.log("Email", inputEmail.value);
    console.log("Tel", inputTel.value);


const li = document.createElement("li")


li.innerHTML = `
    <span class = "contato-nome">${inputNome.value} </span>
    <span class = "contato-email">${inputEmail.value} </span>
    <span class = "contato-telefone">${inputTel.value} </span>
    `;
// para aparecer na tela a lista que a pessoa digitar
lista.appendChild(li)


// Para limpar o que está escrito, para resetar
form.reset()
})    

// inputEmail
// inputTel

/*function btnCadastrar(event) {
    event.preventDefault(); **evita o comportamento padrão
    console.log(inputNome.value);
    console.log(inputEmail.value);
}*/
 

/* validação do formulário
se o input for vazio, adicionar uma mensagem */