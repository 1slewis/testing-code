const http = require('https');
const data = new Array(10);
const dataFinal = new Array(10);
let recieveCounter = 0;
const options = {
    method: 'GET',
    hostname: 'google-maps-geocoding3.p.rapidapi.com',
    port: null,
    path: '/reversegeocode?lat=33.81920915&long=-117.8933572',
    headers: {
        'X-RapidAPI-Key': 'c5ed0db2femshf6c4a6c519ed94bp1e0965jsn1941c70d7a93',
        'X-RapidAPI-Host': 'google-maps-geocoding3.p.rapidapi.com'
    }
};
/*
const options = {
    method: 'GET',
    hostname: 'google.com',
    port: null,
    path: '/'
}
*/
const length = 1;

for (let index = 0; index < length; index++) {

    const req = http.request(options, function (res) {
        const chunks = [];

        res.on('data', function (chunk) {
            chunks.push(chunk);
        });

        res.on('end', function () {
            const body = Buffer.concat(chunks);
            //console.log(body.toString());
            logData(index, "Recieved");
            console.log("Response " + index + ": Recieved");
            printData();
        });
    });

    req.end();
    logData(index, "Sent");
}

function logData(index, type) {
    let now = Date.now()
    if (!data[index]) {
        data[index] = {};
        dataFinal[index] = {};
    }
    if (data[index].Sent) {
        dataFinal[index] = (now - data[index].Sent);
    }
    data[index][type] = Date.now()
}

function printData() {
    recieveCounter++;
    if (recieveCounter !== length) {
        return;
    }
    dataFinal.mean = Math.round(dataFinal.reduce((total, current) => {
        return total + current;
    }) / length * 1000) / 1000;
    for (const key in dataFinal) {
        dataFinal[key] += " ms";
    }
    console.table(dataFinal);
}
