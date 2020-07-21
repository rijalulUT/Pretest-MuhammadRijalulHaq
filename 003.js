function deleteRepetition(numbers){
    for(var j, x, i = numbers.length; i; j = parseInt(Math.random() * i), x = numbers[--i], numbers[i] = numbers[j], numbers[j] = x);
    return numbers;
}
function CreateArray(min, max) {
    var a = Array();
    for (let index = min; index < max; index++) {
      a.push(Math.floor( Math.random() * (max - min + 1) + min))  
    }
    deleteRepetition(a)
    return a;
} 
function maxNumber(a){
    return Math.max.apply(null, a);
}
function minNumber(a){
    return Math.min.apply(null, a);
}
function Average(a){
    var total = 0;
    for (let index = 0; index < a.length; index++) {
        total += Number(a[index]) 
    }
    return total/a.length
}
  
// print array
  console.log(  
    CreateArray(0, 100)
  );

  //print max number
  console.log('Angka Maksimum '+maxNumber(CreateArray(0, 100)));

  //print min number
  console.log('Angka Minimum '+minNumber(CreateArray(0, 100)));

  //print mean 
  console.log('Rata-Rata '+Average(CreateArray(0, 100)));
