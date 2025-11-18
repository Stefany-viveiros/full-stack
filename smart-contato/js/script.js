const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
// inputEmail
// inputTel


function btnCadastrar(event) {
    event.preventDefault();
    console.log(inputNome.value);
    console.log(inputEmail.value);
}