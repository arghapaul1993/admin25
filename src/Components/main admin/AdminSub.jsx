import React, { useState } from 'react';
import './AdminSub.css';

import { LuSettings } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ProImg from './imgg/fdgdfgdf.png';
import CoverImg1 from './imgg/andrej-lisakov-3A4XZUopCJA-unsplash.jpg';
import gramm from './imgg/histogram-fpop.gif';
import Switch from 'react-switch';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';
const AdminSub = () => {


  const [showForm, setShowForm] = useState(false);

  const [adminDatas, setAdminDatas] = useState({
    gift: true,
    store: true,
    analyse: true,
    user: true,
    ban: true,
    level: true,
    recharge: true,
    banner: true,
    salary: true,
    sticker: true,
    ads: true,
    rewards: true,
    admin: true,
    subAdmin: true,
    // Add more options here
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [permissions, setPermissions] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const username = e.target.name.value;
    // const password = e.target.password.value;
    // const Permissions = e.target.permissions.value;
    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/add`, {
        username: username,
        password: password,
        Permissions: permissions
      });
      console.log(response);
      if (response.data.status === true) {
        showNotification(response.data.message, "Success");


      } else {
        showNotification(response.data.message, "Error");

      }
    } catch (error) {
      console.error(error);
    }
    setFormSubmitted(true); // Set formSubmitted state to true
    window.location.reload();
  };
  const handleToggleOption = (option) => {
    setAdminDatas((prevData) => ({
      ...prevData,
      [option]: !prevData[option],
    }));
  };

  const handleOptionSubmit = (event) => {
    event.preventDefault();
    console.log('Admin Data:', adminDatas);
    // Perform your save logic here
  };
  console.log(adminDatas.gift)



  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: '',
    picture: null,
    fb: '',
    insta: '',
    twit: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminData((prevState) => ({ ...prevState, [name]: value }));
  };
  const [showSettings, setShowSettings] = useState(false);



  const handleClick = () => {
    setShowSettings(!showSettings);
  };
  console.log(showSettings)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setAdminData((prevState) => ({ ...prevState, picture: file }));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const [adminCards, setAdminCards] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);


  const OptionCardList = ({ optionName, value }) => {
    return (
      <div className='MyAdminCard'>
        {value ? <h4>{optionName} Enabled</h4> : <h4>{optionName} Disabled</h4>}
      </div>
    );
  };




  const AdminCardList = ({
    proImg,
    coverImg,
    Name,
    SubNAme,
    setting,
    POst,
    fb,
    insta,
    twitter,
    gift,
    store,
    analyse,
    user,
    ban,
    level,
    recharge,
    banner,
    salary,
    sticker,
    ads,
    rewards,
    admin,
    subAdmin,

  }) => {
    return (
      <div className='MyAdminCard'>

        <img src={coverImg} alt='' height={'110px'} width={'100%'} />
        {proImg && (
          <img
            src={URL.createObjectURL(proImg)}
            alt=''
            height={'50px'}
            width={'50px'}
            className='profilePic'
          />
        )}
        <h2>{Name}</h2>
        <p>{SubNAme}</p>
        <div className='socialLinkCard'>
          <a href={fb}>
            <FaFacebook />
          </a>
          <a href={insta}>
            <FaInstagram />
          </a>
          <a href={twitter}>
            <FaTwitter />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img src={gramm} alt='' height={'50px'} width={'80px'} />
          <h3>
            {POst}
            <br />
            Post
          </h3>

        </div>
        <p onClick={handleClick}>{setting}</p>
        {showSettings && (
          <div >
            <OptionCardList optionName="Gift" value={gift} />
            <OptionCardList optionName="Store" value={store} />
            <OptionCardList optionName="Analyse" value={analyse} />
            <OptionCardList optionName="User" value={user} />
            <OptionCardList optionName="Ban" value={ban} />
            <OptionCardList optionName="Level" value={level} />
            <OptionCardList optionName="Recharge" value={recharge} />
            <OptionCardList optionName="Banner" value={banner} />
            <OptionCardList optionName="Salary" value={salary} />
            <OptionCardList optionName="Sticker" value={sticker} />
            <OptionCardList optionName="Ads" value={ads} />
            <OptionCardList optionName="Rewards" value={rewards} />
            <OptionCardList optionName="Admin" value={admin} />
            <OptionCardList optionName="Sub Admin" value={subAdmin} />
          </div>
        )}


      </div>

    );
  };



  console.log(adminCards)

  return (

    <>
      {formSubmitted && (
        <div className='aghoriiiCards'>
          {adminCards.map((adminCard, index) => (
            <AdminCardList key={index} {...adminCard} />
          ))}
        </div>
      )}

      {/* {showSettings && (
        <div className='aghoriiiCards'>
          {Object.keys(adminDatas).map((key) => (
            <OptionCardList key={key} option={key} value={adminDatas[key]} />
          ))}
        </div>
      )} */}


      <div className='subAdminConatiner'>










        <div className='topAdminSubImg'>
          <img src="" alt="" />

        </div>


        <div>
          <div className='formAdminSub'>
            <h3 className='title' style={{ width: '93%', display: 'flex', justifyContent: 'center' }} onClick={toggleForm}>
              Add Admin
            </h3>

            <div style={{ padding: 14 }}>
              {showForm && (
                <form className='formA' onSubmit={handleSubmit}>
                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Username*</label> <br />
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Email*</label> <br />
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={adminData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Mobile*</label> <br />
                    <input
                      type='number'
                      name='mobile'
                      placeholder='Mobile'
                      value={adminData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Password*</label> <br />
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Confirm Password*</label> <br />
                    <input
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                      value={adminData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Assign Role*</label>
                    <br />
                    <select name='role' value={permissions} onChange={(e) => setPermissions(e.target.value)}>
                      <option value=''>   None</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Country Admin">Country Admin</option>
                      <option value="Sub Admin">Sub Admin</option>
                      <option value="Helper">Helper</option>
                      {/* Add options for different roles */}
                    </select>
                  </div>
                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }} >Power of Autonomy </label>
                    <br />
                    <form onSubmit={handleSubmit}>
                      {Object.keys(adminDatas).map((option) => (
                        <div key={option}>
                          <span style={{ marginRight: 190, position: 'relative', top: 20 }}>{option}</span>
                          <spna style={{ display: 'flex', justifyContent: 'center' }}>
                            <Switch
                              checked={adminDatas[option]}
                              onChange={() => handleToggleOption(option)}
                            /></spna>
                        </div>
                      ))}


                    </form>
                  </div>
                  <br />
                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Facebook</label> <br />
                    <input type="text" value={adminData.fb} name="fb" placeholder='Facebook' onChange={handleInputChange} />
                  </div>
                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Whatsapp no.</label> <br />
                    <input type="text" name="insta" value={adminData.insta} placeholder='Whatsapp no' onChange={handleInputChange} />
                  </div>
                  {/* <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Twitter</label> <br />
                    <input type="text" name="twit" value={adminData.twit} placeholder='Twitter' onChange={handleInputChange} />
                  </div> */}

                  <div>
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}>Picture*</label> <br />
                    <input type='file' name='picture' onChange={handleImageChange} />
                  </div>

                  <div className='subAdminBtn'>
                    <button onClick={toggleForm} type='reset' style={{ backgroundColor: 'rgb(255, 87, 34', color: 'white', padding: '5px' }}>
                      Cancel
                    </button>
                    <button type='submit' style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '5px' }}>
                      Submit
                    </button>
                  </div>
                </form>)}
            </div>
          </div>



        </div>
      </div>

    </>
  );
};

export default AdminSub;








