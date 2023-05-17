const btn = document.querySelectorAll("button")
const screen = document.getElementById("screen")
let screenValue = "";


for(item of btn){
    item.addEventListener("click", (e)=>{
        let btnValue = e.target.innerText;
        console.log(btnValue)
        if(btnValue == "c"){
            screenValue = "";
            screen.value = screenValue
        } else if(btnValue == "="){
            screenValue = eval(screen.value)
            screen.value = screenValue
        } else {
            screenValue += btnValue
            screen.value = screenValue
        }
    })
}

