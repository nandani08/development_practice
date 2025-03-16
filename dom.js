
console.log("hello world")

//document.body.firstElementChild.children[3].previousSibling;
//document.body.firstElementChild.children[3].previousElementSibling;
let boxes = document.getElementsByClassName("box")
console.log(boxes)
//boxes[2].style.backgroundColor = "red"
// let redElement = document.getElementById("red")
// redElement.style.backgroundColor = "red";

//document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})