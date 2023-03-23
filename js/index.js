document.querySelector("#button").addEventListener("click",getLocation)
function getLocation(e){
    // console.log("working");
    e.preventDefault()

    const zipcode = document.querySelector("#zipcode").value
    // console.log(zipcode);

    fetch(`http://api.zippopotam.us/us/${zipcode}`)
    .then(res=>{
        if(res.status!=200){
            document.querySelector("#zip-code-details").innerHTML = 
            `<p style="color: red; margin-top:10px;">Invalid Zipcode</p>`;
            throw Error(res.statusText)
        }
        else{
            return res.json()
        }
    })
    .then(data=>{
        // console.log(data);
        let cityDetails = ""
        data.places.forEach(place=>{
            cityDetails+=
            `
            <div style="margin-top:20px;">
            <h4>Zip Code Details</h4>

            <div style="background-color:lightblue; padding: 16px; border-radius:8px; ">
            <p>State: ${place['state']}<p/>
            <p>State Abbreviation: ${place['state abbreviation']}<p/>
            <p>Post Code: ${['post code']}<p/>
            <p>Latitude: ${place['latitude']}<p/>
            <p>Longitude: ${place['longitude']}<p/>
            <p>City: ${place['place name']}<p/>
            <div/>
            <div/>
            `
        })

        document.querySelector("#zip-code-details").innerHTML=cityDetails
    })
    .catch(err=>{
        console.log(err);
    })
}