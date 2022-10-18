const procuraMinMax = (arr) =>{
  if(arr === null || arr.length === 0 || !Array.isArray(arr)){
    return "Não é possível encontrar";
  }
  let min = arr[0];
  let max = arr[0];

  for(let i = 0 ; i < arr.length; i++){
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  return `O menor valor é ${min} o maior valor é ${max}`;
}

var val1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
var val2 = [];
var val3 = [1];
var val4 = [1,-1];
var val5 = null;
var val6 = [-2,-2,-2,-2];
var val7 = [20,10,30];

console.log(val1,' ',procuraMinMax(val1));
console.log(val2,' ',procuraMinMax(val2));
console.log(val3,' ',procuraMinMax(val3));
console.log(val4,' ',procuraMinMax(val4));
console.log(val5,' ',procuraMinMax(val5));
console.log(val6,' ',procuraMinMax(val6));
console.log(val7,' ',procuraMinMax(val7));



