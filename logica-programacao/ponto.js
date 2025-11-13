/*
  Vamos criar um programa, de pontos ganhos do seu time em jogos de futebol
*/

/*
Pesando no programa:
1- Criar uma variavel vitorias, perguntando para o usuario, quantos jogos se time venceu
2- Criar outra variavel empates, perguntando quanto jogos o time empatou
3 - Criar uma variavel de pontos (multiplicar a variavel vitorias * 3) e somar com a variavel empates;
4 - Mostrar na tela esse resultado
*/

/*
Implementar condições,

Se os pontos for maior que 10:
Mostrar a mensagem, "Seu time está indo bem"

Se os pontos for menor que 5:
Mostrar a mensagem, "Seu time precisa melhorar"

*/

let vitorias = Number(prompt("Quantos jogos seu time venceu?🏆"));
let empates =Number(prompt("Quantos jogos o seu time empatou?🎲"));
let pontos = (vitorias * 3) + empates;
document.write("Seu time está com " + pontos + " pontos ");

function jogo(jogo){
    alert(jogo)
}

if(pontos >10) {
    jogo("Seu time está indo bem!😊");
}else if(pontos <5) {
    jogo("Seu time precisa melhorar!😐");
}else {
    jogo("Seu time está na média!😉")
}   

