setInterval(fallingNumbers, 100);
function fallingNumbers(){
    let number = document.createElement("div");
    number.classList.add("num")
    for(i=0; i<70; i++){
        num = Math.floor(Math.random() * 2) + 0;
        number.innerHTML += num;
    }
    document.querySelector("body").appendChild(number);
    setInterval(()=>{
        number.remove();
    },4000)
}