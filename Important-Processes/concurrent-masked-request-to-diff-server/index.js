const { spawn } = require('child_process');

var ipsArr = [
    "79.110.18.54:8085",
    "5.8.46.165:8085",
    "185.251.15.201:8085",
    "5.62.158.211:8085",
    "91.200.81.78:8085",
    "5.8.47.107:8085",
    "95.85.69.18:8085",
    "185.14.195.126:8085",
    "185.101.70.206:8085",
    "95.85.68.165:8085",
    "185.223.161.55:8085",
    "185.251.22.39:8085",
    "5.101.217.196:8085"
]

function startModule() {
    let promises = [];

    for (let i = 0; i < ipsArr.length; i++) {
        promises.push(childProcess(ipsArr[i], i));
    }

    Promise.all(promises)
    .then(results => {
        console.log(results);
    })
    .catch(e => {
        console.log(e.toString());
    })
}

function childProcess (ip, fileNumb) {
    return new Promise((resolve, reject) => {
        let request = spawn('node', ['./send-request.js',`ip=${ip}`, `fileNumb=${fileNumb}`]);
        let datas = '';

        request.stdout.on('data', (data) => {
            datas += data.toString();
        });

        request.stderr.on('data', (data) => {
          console.log(data.toString());
        });

        request.on('close', (code) => {
            resolve(datas)
        });
    })
}

startModule();