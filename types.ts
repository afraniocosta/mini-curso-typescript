// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[] // forma de tipar um array
items = ["foo", "bar"]

let values: Array<number> // outra forma de tipar um array. Conhecida como generic
values = [1, 2, 3] 

// tupla. É um array onde eu sei a quantidade de itens e os tipos deles
let title: [number, string]
title = [1, 'true']

// enum. Enumerator que serve para criar um conjunto de chave valor
enum Colors {
    white = '#fff',
    balck = '#000'
}

// any (qualquer coisa) NÂO É LEGAL
let coisa: any
coisa = [1]

// void (vazio). Server para tipar funções que não retornam nada
function logger(): void{
    console.log('foo') // ele já sabe que o console.log é void, por isso nem é tão necessário tipar, mas é bom
}

// null / undefined
type Bla = string | undefined

// não faz sentido declarar como null, pq se é null não posso mudar ela depois
let variable: null

// never. Nunca vai retornar. No caso abaixo só exibe um erro
function error(): never {
    throw new Error('error');
}

// object
let cart: object;
cart = {
    key: 'fi'
}
