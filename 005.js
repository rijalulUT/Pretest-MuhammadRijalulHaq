const prompt = require('prompt');
prompt.start();

prompt.get(['TahunPertama','TahunKedua'], function (err, result) {
    if (err) { return onErr(err); }
    var tahun_kabisat = Array();
    var tahun_biasa   = Array();
    for (let index = result.TahunPertama; index <= result.TahunKedua; index++) {
        if (index % 4 == '0') {
            tahun_kabisat.push(index)
        }else{
            tahun_biasa.push(index)
        }
    }
    console.log ('list tahun kabisat : ' +tahun_kabisat)
    console.log ('list tahun biasa : ' +tahun_biasa)
    
});


function onErr(err) {
    console.log(err);
    return 1;
}

