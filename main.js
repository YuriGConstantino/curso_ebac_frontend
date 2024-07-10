function Produto(nome, marca, tipo, preco) {
    this.nome = nome
    this.marca = marca
    this.tipo = tipo

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

        console.log(`Novo preço com a Promoção do ${this.nome}, ${this.marca}: ${novaPromocao}`)
    }

}

const arroz = new Produto("Arroz", "Tio João", "Não Perecível", 39.99)
const feijao = new Produto("Feijão", "Camil", "Não Perecível", 7.99)
const melancia = new Produto("Melancia", "Magali", "Fruta", 20.99)
const hamburguer = new Produto("Hambúrguer", "Sadia", "Congelados", 14.99)

console.log(arroz)
console.log(feijao)
console.log(melancia)
console.log(hamburguer)

//add promocao ao produto
arroz.promocao(0.15)
feijao.promocao(0.1)