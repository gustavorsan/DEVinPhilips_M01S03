const somaTudo = (...rest) =>{
  let soma = 0;
  for(let i = 0; i < rest.length;i++){
    soma += rest[i];
  }

  return soma;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10