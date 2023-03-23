const button = document.querySelector("#button")
const counter = document.querySelector("#counter")
let count = 0
const updateCounter = ()=>{
    count++
    counter.innerText= count

    if(count<1000)
    {
        setTimeout(updateCounter,1000)
    }
}

button.addEventListener("click", ()=>{
    updateCounter()
})
