// 做頁系統偵測
import * as OperatingSystem from "os";

console.log("Platform : ", OperatingSystem.platform());

console.log("Total Memory : ", OperatingSystem.totalmem()/1024/1024 , "GB");
console.log("Free Memory : ", OperatingSystem.freemem()/1024/1024 , "GB");

console.log("Home path : ", OperatingSystem.homedir());
console.log("Temp path : ", OperatingSystem.tmpdir());

console.log("Host name : ", OperatingSystem.hostname());
console.log("Network : ");
let network: any = OperatingSystem.networkInterfaces();
Object.keys(network).forEach((key) => {
    console.log(key);
    network[key].forEach((info) => {
        console.log(info.family, info.address);
    })
});

// USB Detected : https://www.npmjs.com/package/usb-detection
//
