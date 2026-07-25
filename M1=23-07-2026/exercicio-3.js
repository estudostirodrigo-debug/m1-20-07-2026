const alunos = [
    {
        nome: "ANA Souza",
        nota1: 8.5,
        nota2: 7.0
    },
    {
        nome: "Bruno Oliveira   ",
        nota1: 6.0,
        nota2: 5.5
    },
    {
        nome: "Carlos SANTOS",
        nota1: 9.0,
        nota2: 8.5
    },
    {
        nome: "DAnIela COstA",
        nota1: 4.0,
        nota2: 5.0
    },
    {
        nome: "Eduardo Lima",
        nota1: 7.5,
        nota2: 6.5
    },
    {
        nome: "  Fernanda AlvES  ",
        nota1: 10.0,
        nota2: 9.5
    },
    {
        nome: " GabrIEl MArtins",
        nota1: 3.5,
        nota2: 4.0
    },
    {
        nome: "HELENA Rodrigues",
        nota1: 6.5,
        nota2: 7.0
    },
    {
        nome: " Igor Almeida  ",
        nota1: 8.0,
        nota2: 8.5
    },
    {
        nome: " Juliana FERREIRA",
        nota1: 5.0,
        nota2: 4.5
    }
];

alunos = function formatarNome(nome){
    return nome.toUpperCase().trim();
};

console.log(formatarNome(alunos));