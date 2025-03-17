//await makes program wait

async function getData() {
    let x = await fetch()
    let data = await x.json
    return data
    
}

// settle = resolve or reject
// resolve = promise has settled successfully
// reject = promise has not settled successfully

