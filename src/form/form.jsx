import React, { useState } from "react";
import "../form/form.css"
function Form() {
    const[firstName, setFisrtName] =useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log("working");
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        if(firstName.length===0 || lastName.length===0 || email.length===0)
        {
            setError(true)
        }
        // if(firstName!==0 || lastName!==0 || email!==0)
        // {
        //     alert("Successfully Logged In")
        // }
    }
    // const handleClick = () =>{
    //     console.log("clicked");
        
    // }
  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            {clicked && firstName.length!==0 && lastName.length!==0 && email.length!==0? 
            <p>Success! Thanks for registering</p>:""}
          <div className="first-name">
            <input type="text" placeholder="First Name" onChange={(e)=>{setFisrtName(e.target.value)}} value={firstName}/>
            {error && firstName.length<=0?
            <label htmlFor="firstname">Please enter first name</label>:""}
          </div>
          <div className="last-name">
            <input type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
            {error && lastName.length<=0?
            <label htmlFor="lastname">Please enter last name</label>:""}
          </div>
          <div className="email">
            <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            {error && email.length<=0?
            <label htmlFor="email">Please enter email</label>:""}
          </div>
          <div className="button">
            <button type="submit" onClick={()=>{setClicked(true)}}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
