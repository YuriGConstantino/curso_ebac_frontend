type aluno = {
    nome: string;
    curso?: string[];
    idade: number

}

const alunos: aluno[] =[
    {
        nome: "Chris",
        curso: ["Front-end", "Python"],
        idade: 27
    },
    {
        nome: "Travis",
        curso: ["Front-end", "UX/UI"],
        idade: 24
    }
]

alunos.push({
    nome: "Jay",
    curso: ["UX/UI"],
    idade: 26
})

const novoAluno: aluno = {
    nome: "Viola",
    idade: 28
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}