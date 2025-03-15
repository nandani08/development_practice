let arr = [1,2,3,4,5];


//mutable
// arr.pop();
// arr.push(100);
// arr.shift();//removes first element
// arr.unshift();

let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr);

const greaterthanseven= e =>{
    if(e>7){
        return true
    }
    return false
}

newArr.filter(greaterthanseven);

