const form = document.querySelector("#form")
const search = document.querySelector("#search")
const button = document.querySelector("#button")
button.addEventListener("click", (e)=>{
    e.preventDefault()
    // console.log("working");
    const find = search.value;
    // console.log(find);

    // fetch(`https://raw.githubusercontent.com/thm/uinames/master/uinames.com/api/${find}`)
    fetch(`https://raw.githubusercontent.com/thm/uinames/master/uinames.com/api/names.json`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        // let country = data[0].region
        // console.log(country);
    })
    .catch((err)=>{
        console.log(err);
    })
})