const alunos = [
    {
        nome: 'Allen',
        nota: 9.75
    },
    {
        nome: 'Franklin',
        nota: 8.8
    },
    {
        nome: 'Isaac',
        nota: 6.5
    },
    {
        nome: 'Richard',
        nota: 3.6
    },
    {
        nome: 'Sophia',
        nota: 3.0
    },
    {
        nome: 'Dennis',
        nota: 8.1
    }

]

function exibeNota() {
    const nota6 = alunos.filter((alunos) => {
        return alunos.nota >= 6

    })
    console.log(nota6)
}

exibeNota(alunos)