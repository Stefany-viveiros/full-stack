const form= document.querySelector("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone")

form.addEventListener("submit", function(event){
    event.preventDefault();


    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value== "") {
        alert("Digite o nome");
        return false;
    }
        
    console.log("Nome", inputNome.value);
    console.log("Email", inputEmail.value);
    console.log("Tel", inputTel.value);
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