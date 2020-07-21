const prompt = require('prompt');
prompt.start();

prompt.get(['TahunPertama','TahunKedua'], function (err, result) {
    if (err) { return onErr(err); }
    var tahun_kabisat = Array();
    for (let index = result.TahunPertama; index <= result.TahunKedua; index++) {
        if (index % 4 == '0') {
            tahun_kabisat.push(index)
        }
    }
    console.log (tahun_kabisat)
    
});


function onErr(err) {
    console.log(err);
    return 1;
}

