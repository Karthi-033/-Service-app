import axios from 'axios';
import './style.css';
import { useEffect,useState } from 'react';
 function View(){
    const [item, setDt]=useState([]);
  
    const[mail,setMail]=useState('');
    const[values,setValues]=useState(null);
    const[vld,setVld]=useState(false);


    useEffect(()=>{
        axios.get("http://localhost:3003/view")
        .then(res=> {setDt(res.data)})
        .catch(err=>{ console.log(err)})
            },[]);


const validate=()=>
{
    const val=item.find(dts => dts.mail===mail);
    console.log(val);
    if(val)
    {
setValues(val);
setVld(true);
    }
    else
    {
        setValues(val);
        setVld(true);
    }
}
    return(<>
    {vld===false && (
    
    <form className="ve">
        <center>
            <lable className="la">Enter your mail id to check your bike status</lable><br></br>

        <lable>mail id : </lable>
        <input type="mail" onChange={e=>setMail(e.target.value)}></input>
        <br></br>
        <button type="submit" onClick={validate}>OPEN</button>
        </center>
    </form>
    
    )}
    {
        vld===true && (values ? (
            <table>
                <tr>
                    <th>Name </th>
                    <th>phone</th>
                    <th>mail</th>
                    <th>oil service</th>
                    <th>general service</th>
                    <th>water service</th>
                    <th>Service Status</th>
                </tr>
                <tr>
            <td>{values.name}</td>
            <td>{values.phone}</td>
            <td>{values.mail}</td>
            <td>{values.oil}</td>
            <td>{values.gen}</td>
            <td>{values.water}</td>
            <td>{values.status}</td>
           </tr>
            </table>
        ):(<>
         <h1>try again</h1>
        </>))
        }

    
    
    </>

);
}
export default View;