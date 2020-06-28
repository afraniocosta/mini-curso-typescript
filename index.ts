const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button");

function sum (a: number, b: number) {
    return a + b;
}

button.addEventListener("click", function(){
    console.log(sum(Number(input1.value), Number(input2.value)));
})

// Ao inputar valores, ao invés de somar os valores, houve uma concatenação, pois foi entendido que era string

// MSGs:
// 1)
// Msg exibida nos values da linha 10: Property 'value' does not exist on type 'HTMLElement'.
// Meu input é um HTML Element e essa msg é pq ele não sabe bem o que é, só sabe que é um elemento, mas eu sei que é do tipo input
// Então vou dizer pra ele que é do tipo input, assim: as HTMLInputElement;

// 2)
// Parameter 'b' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
// Isso deu nos argumentos a e b da função, mas não é boa prática passar any, então passei number

// 3) Msg em input1.value: 
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// Agora ele está percebendo que é uma string e nos avisou, e tmb me diz que não posso usar string pq o parâmetro é do tipo number
// Sendo assim foi parsear essa string para number

// Comando para compilar: tsc index.ts --watch

// OBS: Não preciso tipar a função pois o ts saber que number é número.
// Dica: Se o ts e o eslint não estão reclamando não preciso mudar nada
