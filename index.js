const moment = require('moment')
const coolimages = require('cool-images')
const fs = require('fs')

let images = coolimages.many(600, 800, 10);
let logMessage = moment(new Date()).format("DD/MM/YYYY hh:mm:ss") + "\n"

images.forEach(function(image){
    console.log(image)
    logMessage += image + "\n"
})

log(logMessage)

function log(message){
    let fileName = "logs.txt";
    let existFile = fs.existsSync(fileName)
    if(!existFile){
        fs.writeFileSync(fileName, "")
    }
    fs.readFile(fileName, (err, data) => {
        if(err){
            console.error('Error on get file' + fileName)
            return;
        }
        let text = data.toString()
        text += '\n' + message
        fs.writeFileSync(fileName, text)
    })
}