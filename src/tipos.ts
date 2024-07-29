let boolean: boolean = false

boolean = true

let number: number = 24

number = 1.85

const string: string = 'ola'

const array: string[] = ['']
const arrayAlternativo: Array<string> = ['']

// argumentos com push() nao funciona
const arrayApenasLeitura: ReadonlyArray<number> = [8,5,3,4,6]

// adicona um tipo nos parametros
const lista: [nome: string, idade: number, estaEstudando: boolean] = ['yuri', 24, true]


// Pode adicioar 2 ou mais tipos
let idade: number | string = 25
idade = '25'


// tipo any aceita qualquer valor
let dadosApi: any
dadosApi = 10
dadosApi = true
dadosApi = 'string'
dadosApi = []