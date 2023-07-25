

import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import apple from './picc/Apple Logo.png';
import facebook from './picc/facebook 1.png';
import seaech from './picc/search 1.png';

import gStore from './picc/WhatsApp Image 2023-07-04 at 12.38.55 PM.jpeg';
import aStore from './picc/WhatsApp Image 2023-07-04 at 12.38.56 PM.jpeg';
import dStore from '../admin_panel_logo/direct1.png';
import showNotification from '../../helpers/show_notification';


const Form = () => {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [last_name, setLastName] = useState('');

  const [mobile, setMobile] = useState('');

  const [photo, setPhoto] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleImageChange = (event) => {
    
    setPhoto(event.target.value);
    
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const files = [];
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform login or signup logic here depending on the value of `isLogin`
    if (isLogin) {
      // console.log('Login submitted with email:', email, 'and password:', password);

      const { data}= await axios.post(`http://13.233.229.68:8008/admin/login`,{username:email,password})
    //  const {signup} =await axios.get("https://travel-cg48.onrender.com/user/signup",{username:email,password})
     console.log(data.success)
    
    if(data.success.toString() == 'true'){console.log('Login submitted with email:', email, 'and password:', password);
    console.log(data)
      console.log(localStorage)
      showNotification("Login successfully", "Success");
      navigate("/Admins")
      window.location.reload();
     console.log('89')
    
    }else if (data.success.toString() === 'false'){
      console.log(data.success)
      window.alert('error')}
      

      if (data) {
        localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("userToken",data.data.token);
      localStorage.setItem("photo", `http://35.78.201.111:3008/profile_images/${data.data.photo}`);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("first_name", data.data.first_name);
      localStorage.setItem("last_name", data.data.last_name)
      localStorage.setItem("userId", data.data._id);
      localStorage.setItem("", data.data._id);
      localStorage.setItem("mobile", data.data.mobile);
    
    }
    console.log(localStorage)
    // console.log(data.data.photo)
      console.log(data,"dttt")
      // console.log(data.data.email,"email")
      // console.log(data.data.password,"email")
      if(data.success == 'true'){
      if((data.data.email===email)&&(data.data.password===data.data.password)){
        // navigate("/profileForm");
      }
      else{
        alert("input correct email and password")
        console.log("wrong password")
      }}
      
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Check if the username and password match (e.g., against an API or hardcoded values)
        if (setName === 'example' && password === 'password') {
          // Redirect the user to the profile page
          window.location.href = './profile'; // You can use React Router for a more elegant solution
        } else {
          // Display an error message or perform other actions for unsuccessful login attempts
          console.log('Invalid username or password');
        }
      };
    

    } 
    
    
    
    else {
    

      // console.log(
      //   'Signup submitted with name:',
      //   name,
      //   'email:',
      //   email,
      //   'password:',
      //   password,
      //   'and confirmPassword:',
      //   confirmPassword
      // );

      const { data}= await axios.post(`https://travel-cg48.onrender.com/user/create`,{first_name:name,last_name:last_name,mobile:mobile,photo:photo,email,password})

      console.log(data)
console.log(localStorage)
if(data.success == "true"){
  // showNotification("Login successfully", "Success");
navigate("/form");

    }else{
      window.alert("error")
    }}
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (

    <>
    <div className='bigee'><p>Welcome To BigeeLive</p></div>
    <div className="maindivimg">
     


    <div className="authForm">
 



<h1 id='headingLogin'>{isLogin ? 'Login' : 'Signup'}</h1>
<form onSubmit={handleSubmit} style={{marginLeft:"35rem"}}>
  {!isLogin && (
    <input
      type="text"
      placeholder="FirstName"
      value={name}
      id='name'
      onChange={handleNameChange}
    /> 
  )} <br/>
   {!isLogin && (
    <input
      type="text"
      placeholder="LastName"
      value={last_name}
      id='name'
      onChange={handleLNameChange}
    /> 
  )} <br/>
  <input

  className='emaill'
    type="email"
    placeholder="Email"
    value={email}
    id='email'
    onChange={handleEmailChange}
  /><br/>
   {!isLogin && (
    <input
      type="tel"
      placeholder="Mobile Number"
      value={mobile}
      id='mobile_no'
      onChange={handleMobileChange}
    /> 
  )} <br/>
  <input
    className='emaill'
    type="password"
    placeholder="Password"
    value={password}
    id='password'
    onChange={handlePasswordChange}
  /> <br/>
  {!isLogin && (
    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      id='ConfirmPass'
      onChange={handleConfirmPasswordChange}
    />
  )}<br/>
 {!isLogin && (
    <input
      type="file"
      placeholder="Set Profile"
      value={files[0]}
      id='files[0]'
      onChange={handleImageChange}
    />
  )}
<br/>
            <button type="submit" id='LoginBtn'>{isLogin ? 'Login' : 'Signup'}</button>
            <br/>
  {/* <p style={{fontSize:20}}> 
    {isLogin ? "Don't have an account?" : 'Already have an account?'} &nbsp;
    <br/><button type="button" onClick={handleSwitchForm} id='signupBtn'>
      {isLogin ? 'Signup' : 'Login'}
    </button>
  </p> */}

  {/* logo */}
  {/* <div className='socialIconsLogin'>
    <img src={apple} alt="" />
    <img src={seaech} alt="" />
    <img src={facebook} alt="" />
  </div> */}
  
</form>
</div>
    </div>
      <div className='StoreIconss'>
       <img src={aStore} height={'60px'} width={'150px'} />
       <img src={gStore} height={'60px'} width={'150px'} /> 
       <div style={{position:'relative', top:-440 , left:350}}><img src={dStore} height={'250px'} width={'300px'}  /> </div>
        
       </div>
    
    </>
   
  );
};

export default Form;





// import React,{useState} from 'react';
// import './login.css';

// import google from './picc/search 1.png';
// import apple from './picc/Apple Logo.png';
// import facebool from './picc/facebook 1.png';

// import loginImg from './picc/Girl and boy sitting with laptop.png';

// const Login = () => {
//   return (
//     <>
//     <div className='loginConatiner'>
//        <div className='loginLeft'>
//         <p id='loginztext'>
//           Sign  In  to <br/>
//           Recharge Direct
//         </p>
//           <img src={loginImg} alt="" id='loginImg' />
//        </div>

//        <div className='LoginRight'>
//         <div className='topLinkFrom'>
//           <p>English</p>
//           <p>Sign In</p>
//           <p >Register</p>
//         </div>

//         <div className='formLogin'>
//           <input type="email" name="" id="" placeholder='Enter Email' />

//           <input type="password" name="" id="" placeholder='Password' />

//           <button value="Submit"  id='loginBtn'>Submit</button>

//           <div id='soacilLinkk'>
//             <img src={google} alt="" />
//             <img src={apple} alt="" />
//             <img src={facebool} alt="" />

//           </div>
//         </div>


//        </div>

//     </div>
    
    
    
    
    
//     </>
//   )
// }

// export default Login