function Produto(nome, preco) {
    this.nome = nome
    
    let _preco = preco

    this.getPreco = () => {
        return _preco
    }

    this.setPreco = (valor) => {
        if (typeof valor === 'number') {
            _preco = valor
        }
    }

    this.promocao = (valor) => {
        const novaPromocao = parseFloat(_preco - (_preco * valor)).toFixed(2)

        console.log(`Novo preço com a Promoção do ${this.nome}: R$: ${novaPromocao}`)
    }

}

function NaoPereciveis(nome, preco, tipo) {
    Produto.call(this, nome, preco)
    this.tipo = tipo
}

function Frutas(nome, preco, tipo) {
    Produto.call(this, nome, preco)
    this.tipo = tipo
}

function Congelados(nome, preco, tipo) {
    Produto.call(this, nome, preco)
    this.tipo = tipo
}

//add novo produto
const arroz = new NaoPereciveis("Arroz Tio João", 39.99, "Não Perecível")
const feijao = new NaoPereciveis("Feijão Camil", 7.99, "Não Perecível")
const melancia = new Frutas("Melancia Magali", 20.99, "Fruta")
const hamburguer = new Congelados("Hambúrguer Sadia", 14.99, "Congelados")

console.log(arroz)
console.log(feijao)
console.log(melancia)
console.log(hamburguer)

//add promocao ao produto
arroz.promocao(0.15)
feijao.promocao(0.1)