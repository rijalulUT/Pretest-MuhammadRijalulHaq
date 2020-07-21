const prompt = require('prompt');
prompt.start();

prompt.get(['umur'], function (err, result) {
    if (err) { return onErr(err); }
    const biodata = [
                        { "id": 1, "name": "Udin", "age": 12 },
                        { "id": 2, "name": "Reane", "age": 51 },
                        { "id": 3, "name": "Budi", "age": 34 },
                        { "id": 4, "name": "Agus", "age": 16 },
                        { "id": 5, "name": "Sari", "age": 19 },
                        { "id": 6, "name": "Ririn", "age": 20 },
                        { "id": 7, "name": "Dessy", "age": 23 }
                     ]
    biodata.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            if (obj.age == result.umur) {
                console.log(`${key} : ${value}`);
            }
        });
    });

});


function onErr(err) {
    console.log(err);
    return 1;
}

