let body = document.querySelector("body");
let colorName = document.querySelector(".color-name");
let text = document.querySelector(".text");

let colorList = ["whitesmoke","blue","aqua","aliceblue","bisque","tomato","olive","navy"]
console.log("array length : " + colorList.length);


function changeColor(){
    let randomNumber = Math.floor(Math.random() * colorList.length);
    body.style.backgroundColor = colorList[randomNumber];
    text.style.color = colorList[randomNumber];
    colorName.textContent = colorList[randomNumber];
    console.log(randomNumber);
}