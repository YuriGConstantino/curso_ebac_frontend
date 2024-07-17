const redesSociais = ["face", "X", "Insta"]

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`${redesSociais[i]}`)
}


const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map((item) => {
    return {
        nome: item,
        curso: 'Front-End'
    }
})

console.log(alunos2)

const achaNome = alunos2.find((item) => {
    return item.nome == 'Paula' //retorna true ou false

})

console.log(achaNome)

const achaIndex = alunos2.findIndex((item) => {
    return item.nome == 'Paula' //retorna true ou false

})

console.log(achaIndex)

alunos2.push({
    nome: 'Yuri',
    curso: 'Back-End'
})

const alunosFrontEnd = alunos2.every((item) => {
    return item.curso === 'Front-End' && item.curso === 'Back-End'
})


const alunosBackEnd = alunos2.some((item) => {
    return item.curso === 'Back-End'
})

console.log(alunosFrontEnd)
console.log(alunosBackEnd)

const nums = [10, 20, 30, 10]

const soma = nums.reduce((acumulador, item) => {
    acumulador += item
    return acumulador
}, 0)

console.log(soma)