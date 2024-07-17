class Pokemon {
    #hp = 100

    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo

    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebouAtaque() {
        this.#hp -= 10
    }

    exibeHp() {
        console.log(this.#hp)
    } 

}

class Charizard extends Pokemon {
    constructor() {
        super('Charizard', 'Fogo')
    }

    atacar() {
        console.log(`${this.nome} atacou com Lança chamas`)
    }
}

const charizard = new Charizard()
charizard.recebouAtaque()
charizard.exibeHp()
charizard.atacar()



const pikachu = new Pokemon('Pikachu', 'Elétrico')

pikachu.atacar('Choque do trovão')

console.log(pikachu)
console.log(charizard)
