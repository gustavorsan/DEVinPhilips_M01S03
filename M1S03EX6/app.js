const mudaOrdem = str => {
  let novaStr = '';
  for(let i = str.length - 1; i >= 0; i--){  
    novaStr += str[i]; 
  }
  return novaStr;
}

const verificaPalindromo = str => {
  let auxStr = mudaOrdem(str);

  return auxStr === str;
}

const teste1 = verificaPalindromo("ana");
// true

const teste2 = verificaPalindromo("julia");
// false