const callback = (arg) =>{
    console.log(arg)
}

const loadScript = (src , callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Nandani");
    document.head.append(sc)
}

loadScript("",callback)