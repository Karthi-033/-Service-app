import React from "react";
import { useState } from "react";
import './al.css';
import axios from'axios';
function Apply(){
    const [name,setName]=useState();
    const [phone,setPhone]=useState();
    const [mail,setMail]=useState();
    const [gen,setGen]=useState();
    const [oil,setOil]=useState();
    const [water,setWater]=useState();
    const [check,setCheck]=useState(false);
  const status="registered";
    const submit=()=>{
        axios.post("http://localhost:3003/save",{name,phone,mail,gen,oil,water,status})
        .then((users)=>{
            console.log(users)
        })
        .catch(err=> console.log(err))
    }
    const fun=()=>{
        setCheck(true);
    }
    if(!check)
    {
    return(<>
    <p className="body">
        <center><p className="h1">Apply here for services</p>
        <div className="gap">
        <form className="form" id="form" onSubmit={fun}>
        <lable>Name : </lable>
        <input type="text" id="f1" required onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Phone : </label>        
        
        <input type="Number" required onChange={(e)=>setPhone(e.target.value)}/><br/>
        <label>E-mail : </label>
        <input type="email" id="f2" required onChange={(e)=>setMail(e.target.value)}/><br/>
        <lable>General service check-up</lable>
        <input type="checkbox"  id="f3" onChange={(e)=>setGen(e.target.value)}/><br/>
        <lable>Oil change</lable>
        <input type="checkbox"  id="f4" onChange={(e)=>setOil(e.target.value)}/><br/>
        <lable>Water wash</lable>
        <input type="checkbox"   id="f6" onChange={(e)=>setWater(e.target.value)}/><br/>
        <button  className="sub" type="submit" onClick={submit}>Submit</button>
        </form>
        </div>
        </center>
    </p>
    </>);}
    else{
        return(<>
        <h1>registered sucessfully</h1>
        </>)
    }
}

export default Apply;