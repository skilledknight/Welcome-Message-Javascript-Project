const button=document.querySelector("button");
const output=document.querySelector(".output");
const temp=document.querySelector("input");

console.log(button);
button.addEventListener("click",function showMessage(){
output.innerHTML='<h1>Hello Welcome, '+temp.value+'</h1>';
})