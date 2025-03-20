const fs = require("fs")

//console.log(fs)

console.log("starting")

fs.writeFile("nan.txt", "nandani is a good girl", ()=>{
    console.log("done")
    fs.readFile("nan.txt",(error, data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("nan.txt", "nandani" , (e, d)=>{
    console.log(d)
})
console.log("ending")