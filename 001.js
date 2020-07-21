const prompt = require('prompt');
prompt.start();

prompt.get(['MasukkanNilai'], function (err, result) {
    if (err) { return onErr(err); }
    switch (true) {
        case result.MasukkanNilai >= 90:
        console.log('Grade Anda A');
            break;
        case result.MasukkanNilai >= 80  && result.MasukkanNilai < 90:
        console.log('Grade Anda B');
            break;
        case result.MasukkanNilai >= 70 && result.MasukkanNilai < 80:
        console.log('Grade Anda C');
            break;
        case  result.MasukkanNilai >= 60 && result.MasukkanNilai < 70:
        console.log('Grade Anda D');
            break;
        case result.MasukkanNilai < 60: //saya tulis < 60, karena apabila < 59 maka ketika saya input 59 dia dianggap error
        console.log('Grade Anda E');
            break;    
        default:
        console.log('Anda harus memasukkan angka');
            break;
    }
});


function onErr(err) {
    console.log(err);
    return 1;
}

