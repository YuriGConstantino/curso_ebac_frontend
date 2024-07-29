function multiplicacao(base: number, altura: number) {
    return base * altura

}
const base = 2
const altura = 4
const multiplica = multiplicacao(base, altura)

console.log(multiplica)

function saudacao(nome: string) {
    return `Ola ${nome}`
}

const dizOla = saudacao('Yuri')

console.log(dizOla)
