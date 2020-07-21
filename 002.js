const prompt = require('prompt');
prompt.start();

prompt.get(['Angka'], function (err, result) {
    if (err) { return onErr(err); }
    if (result.Angka % 2 == 0) {
        console.log('Angka Genap')
    } else {
        console.log('Angka Ganjil')
    }
});


function onErr(err) {
    console.log(err);
    return 1;
}

