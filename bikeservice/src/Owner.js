
import { useState, useEffect } from 'react';
import axios from 'axios';
import './owner.css';
//import emailjs from 'emailjs-com';

function Owner() {

  const [pass, setPass] = useState('');
  const [op, setOp] = useState(false);
  const [data, setData] = useState([]);
  const [status, setServ] = useState('');
  const [id, setId] = useState();
  const [name, setName] = useState();
  // const[up,setUp]=useState({
  //   status:status,
  //   id:id
  // })

  useEffect(() => {
    axios.get("http://localhost:3003/view")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);


  function clk() {
    if (pass === '123') {
      setOp(true);
    }
  }
  function seto() {
    setServ("Started");
  }
  function setg() {
    setServ("Inprocess");

  }
  function setw() {
    setServ("Completed");

  }
  function update() {

    axios.put("http://localhost:3003/update", { id, status })
      .then((user) => {
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const remove = async (idd) => {
     await axios.delete("http://localhost:3003/delet/"+idd);
    console.log(idd)

  }
  function idset() {

    data.map(user => {
      setId(user._id)
      setName(user.name)
    }
    )
  }



  return (
    <>
      <center name="center">
        {op === false && (<>
          <lable> Enter The Password </lable><br>
          </br>
          <input type="text" name="in" onChange={e => setPass(e.target.value)}></input><br></br>

          <button type="submit" className='b1' onClick={clk}>Enter</button></>)}
        {
          op && (


            data.map(user => {
              {


                return (<><div className='bod'><div className='card'><div className='ng'><lable className="ns">Name : </lable>
                  {user.name}
                  <lable className="space"><div></div>Phone : </lable>
                  {user.phone}

                  <br></br>
                  {/* <h1>{user._id}</h1> */}

                  <lable><b>Services</b><br></br> Oil : {user.oil}<br></br>General : {user.gen}<br></br>Water : {user.water}</lable>
                  {/* <h3>{ user.status}</h3> */}
                  <br></br><b> </b><button onClick={seto} className='bb' type='submit'>Started</button><lable>  </lable><br></br>
                  <b> </b><button type='submit' onClick={setg} className='bb1'>Inprocess</button><br></br>
                  <b></b> <button className='con' onClick={setw} className='bb2' type='submit'>Completed</button> <lable>Current process:<b>{user.status}</b></lable><br></br><button type="submit" className='con1' onClick={idset} >confirm</button><button className='con2' type="submit" onClick={update}>Update</button>
                  <button className='con2' type='submit' onClick={() => remove(user._id)}>Remove</button> </div></div>

</div>
                </>);
              }
            })


          )
        }
      </center>
    </>
  );
}
export default Owner;