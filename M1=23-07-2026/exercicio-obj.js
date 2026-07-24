let alunos = [
    {
        nome:'Pedro',
        nota:'7',
        turma:'2'
    },
    {
        nome:'Maria',
        nota:'6,5',
        turma:'3'
    },
    {
        nome:'Eduardo',
        nota:'5',
        turma:'4'
    },
    {
        nome:'Greg',
        nota:'8',
        turma:'5'
    },
    {
        nome:'Ana',
        nota:'9',
        turma:'5'
    }
];
//console.log(alunos);

//* utilizando for of
for (let aluno of alunos) {
    aluno.nota = aluno.nota >= 6;
};
console.log(alunos);



