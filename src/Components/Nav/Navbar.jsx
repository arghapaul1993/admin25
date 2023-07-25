import React, { useState,useEffect } from 'react';
import './Navbar.css';
import {MdNotificationsNone,MdMailOutline,MdWhatsapp,MdOutlineSettings} from 'react-icons/md';
import {BsCalendarDate} from 'react-icons/bs';

import propic from './piccc/20211115_155259.jpg'

const Navbar = () => {
//  date and time 
const [currentDateTime, setCurrentDateTime] = useState(new Date());



const pp = localStorage.getItem('pp')
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000); // Update every second

  // Cleanup the interval on component unmount

  return () => clearInterval(interval);
}, []);

const formatDateTime = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',};
  return date.toLocaleString(undefined, options);
};




const nn = localStorage.getItem("first_name")
  return (
<>
<div className='navbarContainer'>
   <span id='seachh'> <input type="search" placeholder='&#x1F50D; Search'/></span>
<span> {formatDateTime(currentDateTime)}</span>
<span > <MdNotificationsNone style={{fontSize:'30px'}} /> </span>
<span> <MdMailOutline  style={{fontSize:'30px'}}/></span>
<span><MdWhatsapp style={{fontSize:'30px'}}/></span>
<span><BsCalendarDate style={{fontSize:'30px'}}/></span>
<span><MdOutlineSettings style={{fontSize:'30px'}}/></span>
<span><img src={pp} className='profilePicc' height={'30px'} width={'30px'} />{nn}</span>

</div>



</>
  );
};

export default Navbar;
