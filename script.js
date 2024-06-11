const btn = document.querySelector("#btn")


let randomColor = () => {
    let val = "ABCDEF0123456789"
    let hash = "#"

    for(let i = 0; i < 6;  i++){
        hash = hash + (val[Math.floor(Math.random() * val.length)]);
        btn.innerHTML=hash 

    }

    return hash
}



console.log(randomColor());

const changeColor=()=>{
    document.body.style.backgroundColor=randomColor()
}

btn.addEventListener("click",changeColor)

