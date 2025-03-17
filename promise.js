let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("random no. not allowed")
    }
    else{
    setTimeout(()=>{
        console.log("done")
        resolve("nandani")
    },2000)
    }
})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})