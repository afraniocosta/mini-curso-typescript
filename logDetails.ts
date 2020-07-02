// type alias, que em inglês é atalho
type Uid = string | number | undefined

// Para evitar ficar repetindo o string | number | undefined, eu posso criar um type como acima e o uid abaixo recebe ele.

function logDetails (uid: Uid | number, item: string) {
    console.log(`A prduct with ${uid} has a title as ${item}.`);
}

function logInfo (uid: Uid, user: string) {
    console.log(`An user with ${uid} has a title as ${user}.`);
}

logDetails(123, 'sapato');
logDetails('123', 'sapato');

logInfo(123, 'Willian');
logInfo('123', 'Willian');

// O type alias tmb serve para:

type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlataform(plataform: Plataform) {
    return plataform // aqui poderia ser um JSX ou dentro de um h1 por exemplo
}
// Se ios não estiver dentro do type Plataform vai reclamar dizendo que ele não é do tipo Plataform
renderPlataform('ios')

// Conclusão: O type alias serve para:
// 1) Evitar repetição de código
// 2) Definir quais os tipos podemos utilizar