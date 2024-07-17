let meuMap = new Map()
meuMap.set('nome', 'yuri')

console.log(meuMap)

const nome = meuMap.get('nome')

console.log(nome)

console.log(meuMap.size)

// console.log(meuMap.has('nome'))
console.log(meuMap.has('sobrenome'))

// meuMap.clear()
// console.log(meuMap.size)

for (let key of meuMap.keys()) {
    console.log(key)
}

for (let value of meuMap.values()) {
    console.log(value)
}

// for (let entrie of meuMap.entries()) {
//     console.log(entrie)
// }

for (let [key, value] of meuMap.entries()) {
    console.log(`${key}: ${value}`)
}

// meuMap.delete('nome')

// console.log(meuMap)

//set

const cpfs = new Set()

cpfs.add('34661423003')
cpfs.add('05989759002')
cpfs.add('46803824063')

console.log(cpfs.keys())
console.log(cpfs.values())


const array = [1,1,2,2,3,3,4,4,5,5]

const arrayComSet = new Set([...array])

const arraySemDuplicadas = [...arrayComSet]

console.log(arrayComSet)
console.log(arraySemDuplicadas)

