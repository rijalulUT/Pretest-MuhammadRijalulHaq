const prompt = require('prompt');
prompt.start();

prompt.get(['Angka'], function (err, result) {
    if (err) { return onErr(err); }
    function countDownFrom(number) {
        if (number === 0) {
            return;
        }
        console.log(number);    
        countDownFrom(number - 1);
    }
    
    countDownFrom(5);
    
});


function onErr(err) {
    console.log(err);
    return 1;
}

