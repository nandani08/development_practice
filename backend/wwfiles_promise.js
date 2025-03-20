import fs from "fs/promises"

let a = await fs.readFile("nan.txt")

let b = await fs.writeFile("nan.txt", "this is promise /n/n/n")
console.log(a.toString(), b)