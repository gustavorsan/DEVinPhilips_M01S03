const validarArray = arr => {
  return arr === null || arr.length === 0 || !Array.isArray(arr)
}

const concatena = (arr1,arr2) =>{
  if(validarArray(arr1),validarArray(arr2)){
    return "Não é possivel concatenar";
  }
  return [...arr1,...arr2]
}


const novoArray = concatena([1, 2, 3], [4, 5, 6]);

console.log(novoArray);

