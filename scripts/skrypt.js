setInterval(fallingNumbers, 1);
function fallingNumbers(){
    let number = document.createElement("div");
    
    num = Math.floor(Math.random() * 2) + 0;
    number.innerHTML=num;
    
    number.classList.add("number");
    left = (Math.floor(Math.random() * 61) + 20)+"%";
    number.style.left = left;
    document.querySelector("body").appendChild(number);
    number.classList.add("falling");
    setInterval(()=>{
        number.remove();
    },1200)
}