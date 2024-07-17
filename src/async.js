const funcaoPesada = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
        for (let i = 0; i < 1000000000; i++) {
            execucoes++
        }
        resolve(execucoes)
    } catch (e) {
        reject('Algo deu  errado')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000)
    })
}


async function execucao() {
    console.log('inicio')

    promiseComParametros('yuri', 1234).then(resultado => {
        console.log(resultado)
    })

    try {
        const resolve = await funcaoPesada
        console.log(resolve)
    }catch(error) {
        console.log(error)
    }

    console.log('fim')

}

execucao()



