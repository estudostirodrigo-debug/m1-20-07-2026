function quadrado(num) {
    // verifica se o parâmetro é numérico
   // if (isNaN(num)) {      //ty
      //  return 'Parâmetro incorreto';
  //  } else {

    //Calcula o quadrado
   // return num * num; }
//};

// Testes
//console.log(quadrado(6));

if(typeof(num)  == 'number' ) {
    return num * num;

}  else {
    return 'Parâmetro incorreto';
}
};
   
console.log(quadrado(9));
console.log(quadrado('um'));