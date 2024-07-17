//rest
function somar() {
    let soma= 0
    
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma

}

console.log(somar(10,20,30))

function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)

    return soma

}
console.log(somarComRest(10,20,30))

//spread
const numeros1 = [0,1,2,3,4]
const numeros2 = [5,6,7,8,9]

const numeros3 = [...numeros1, ...numeros2]

console.log(numeros3)

const carro1 = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carro2 = {
    ...carro1,
    motor: 1.8

}

console.log(carro1)
console.log(carro2)


//destruturação
const { motor: motorCarro1 } = carro1
const { motor: motorCarro2 } = carro2
console.log(motorCarro1)
console.log(motorCarro2)


