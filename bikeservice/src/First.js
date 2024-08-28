import React from 'react';
import './App.css';
import ani from'./ani1.png';
import pin from'./pin.png';
import { useNavigate } from 'react-router-dom';
function First() {
  const navigate =useNavigate();
  return (
    <p className='fbody'>
    <div className="App">
      <div className="bo">
         <p className="head">Welcome To John Bike Service Center</p>
      </div>
      <div className="grp">
        <button className="apply" onClick={()=>navigate('/apply')} >
          <p>
        Click here to apply for bike service</p>
        <img id="b" src={ani} alt="" width="400px "></img>
        </button>
        <button href="st.js" className="st"onClick={()=>navigate('/view')}>
          <p> Click here to view the service status</p>
          <img src={pin} alt="" width="400px"></img>
 
        </button>

      </div>
      <button className='loo' onClick={()=>navigate('/Owner')} >Owner login</button>
    </div></p>
  );
}

export default First;
