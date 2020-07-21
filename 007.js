const prompt = require('prompt');
prompt.start();

prompt.get(['Kalimat'], function (err, result) {
    if (err) { return onErr(err); }
    var sentence = result.Kalimat
    var reverse = sentence.split('').reverse().join('')
    console.log(reverse)
});


function onErr(err) {
    console.log(err);
    return 1;
}

