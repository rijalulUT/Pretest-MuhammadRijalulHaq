var standard_input = process.stdin;

standard_input.setEncoding('utf-8');

console.log("masukkan beberapa angka");
var total = 0;

standard_input.on('data', function (data) {
 
    if(data === '=\n'){
        console.log("Jumlah keseluruhan : " +total);
        process.exit();
    }else{
        total = total+parseInt(data);
    }
});
