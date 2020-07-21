const prompt = require('prompt');
prompt.start();

prompt.get(['Kalimat'], function (err, result) {
    if (err) { return onErr(err); }
    var sentence = result.Kalimat
    var reverse = sentence.split('').reverse().join('')
    if (sentence == reverse) {
        console.log('kalimat ini merupakan palindrom')
    } else {
        console.log('kalimat ini bukan palindrom ')
    }
    
});


function onErr(err) {
    console.log(err);
    return 1;
}

