let carro = {
   marca:'Palio',
   modelo:'Fire',
    ano:'2004',

   descricao: function() {
    return `carro: ${this.marca} ${this.modelo} ${this.ano}`;
   }

};


console.log(carro.descricao());




