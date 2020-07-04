//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // Este sinal de ? diz que não é obrigatório. É a mesma coisa de fazer assim: email: string | undefined. Ou seja string OU undefined.
}

const account: AccountInfo = { // Aqui estou criando uma const e dizendo que ela é do tipo AccountInfo
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
// Aqui estou dizendo que o PlayerInfo é a intersecção entre esses 2.
// Ele junta os tipos dos dois

const player: PlayerInfo = {
  id: 123,
  name: 'Afrânio',
  nickname: 'AfrânioCosta',
  level: 100
}