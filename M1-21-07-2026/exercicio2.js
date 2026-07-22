var criarPessoas = function (listaPessoas) {
    const arrayRetorno = [];  // criação da lista de retorno da função
    for(let indice = 0; indice < listaPessoas.length; indice++) {  // Iteração no array do parâmetro
        let obj = {  // criação de um objeto
            id: indice +1,    // atribuição de valor do indice + 1
            nome: listaPessoas[indice]  //acesso aoo noe do array listaPessoas na posição do indice
        }
        arrayRetorno.push(obj);  // inclusão do objeto no array
    }
    return arrayRetorno; // retorna o array
};

const nomes = ['João', 'Maria','Rose'];
console.log(criarPessoas(nomes));
