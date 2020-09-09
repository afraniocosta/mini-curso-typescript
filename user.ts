//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // O sinal de ? diz que não é obrigatório. É a mesma coisa de fazer assim: email: string | undefined. Ou seja string OU undefined.
}

// Aqui estou criando uma const e dizendo que ela é do tipo AccountInfo.
const account: AccountInfo = {
  id: 123,
  name: 'Afrânio'
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'AfrânioCosta',
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo
// Aqui estou criando um type PlayerInfo, que é formado pela intercessão entre AccountInfo e CharInfo.

const player: PlayerInfo = {
  id: 123,
  name: 'Afrânio',
  nickname: 'AfrânioCosta',
  level: 100
}
