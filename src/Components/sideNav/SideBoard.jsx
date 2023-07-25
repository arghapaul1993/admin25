import React, { useState } from 'react';
import './SideBoard.css'

import propic1 from '../admin_panel_logo/images.jpeg';
import propic2 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';

import propic3 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';

import propic4 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';

import propic5 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';
import { LuSettings } from 'react-icons/lu';

import propic6 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';
import propic7 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';
import propic8 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';

import propic9 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';
import propic10 from '../admin_panel_logo/Analyse//Bigee Live/Frame 53.png';
import { useNavigate } from 'react-router-dom';
















import { GiProgression, GiBattery100 } from 'react-icons/gi';
import { GrUserAdmin } from 'react-icons/gr';
import { BsFillBagFill, BsCurrencyRupee, BsSticky, BsReverseLayoutTextWindowReverse, BsFillBarChartFill, BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineGift, AiOutlineLogin, AiOutlineDollarCircle, AiOutlineDollar } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings, MdOutlineVerified, MdPayment, MdSettings } from 'react-icons/md';
import { BiClipboard } from 'react-icons/bi';






import { Link } from 'react-router-dom';

import { FaCrown, FaGreaterThan } from 'react-icons/fa';
import showNotification from '../../helpers/show_notification';
const SideBoard = () => {

  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [proImg, setProImg] = useState(null);
  const [name, setName] = useState('');
  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new store item with the form input values

    localStorage.setItem("pp", URL.createObjectURL(proImg));
    localStorage.setItem("first_name", name)

    // Reset form values
    setName('');
    setProImg(null);



    setIsStoreOpen(false);
  };
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const handleClick = () => {
    setShowSettings(!showSettings);
  };
  const nn = localStorage.getItem("first_name")
  const pp = localStorage.getItem('pp')
  console.log(localStorage)
  return (
    <>
      <div className='sidePanalConatiner'>
        {/* <p onClick={handleClick}>{<LuSettings/>}</p> */}
        {/*  */}
        <div>
          <button id="AddStore1Btn" style={{ position: 'relative', backgroundColor: 'transparent', top: 50, right: 120 }} onClick={() => setIsStoreOpen(true)}>
            {<LuSettings />}
          </button>
          {isStoreOpen && (
            <div className="popup">
              <div className="popUpContainer" style={{ overflow: 'hidden' }} >
                <h4 style={{ width: "92%", backgroundColor: '#3c99dc', color: 'white', textAlign: 'center', padding: '10px', position: 'relative', margin: '0 auto' }}>Set-Up Store</h4>


                <form onSubmit={handleFormSubmit}>
                  <div className="Productform">
                    <label>Picture</label>
                    <input type="file" accept="image/*" onChange={(e) => setProImg(e.target.files[0])} />
                  </div>

                  <div className="Nameform">
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>


                  <div className='twoBtns'>
                    <button
                      onClick={() => setIsStoreOpen(false)}
                      style={{
                        backgroundColor: '#FF5722',
                        border: 'none',
                        borderRadius: '5px',
                        color: 'white',
                        padding: '5px'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      // onClick={handleCancel}
                      type="submit"
                      style={{
                        backgroundColor: '#3c99dc',
                        border: 'none',
                        color: 'white',
                        padding: '5px'
                      }}
                    >
                      ADD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        {/*  */}
        <div className='profileSIDE'>
          <div className='profileSideDiv1' >
          </div>
          <div className='profileSideDiv2' >
            {user ? <img src={propic1} className='sideProPic' alt="" /> : <img src={propic1} className='sideProPic' alt="" />}
            <p style={{ fontSize: '25px', fontWeight: 'bold' }} id='aghoriText'>{user && user.username}</p>
            <br></br>
            <p id='masterPanalText'>Master Panel</p>
          </div>
        </div>

        <div>


          <div className="sidebar">
            <Link to='/Admins'>
              <button
                className={selectedButton === 'button1' ? 'selected' : ''}
                onClick={() => setSelectedButton('button1')}
              >
                <i className="icon1"><p ><BiUserCircle style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button1' ? 'selected' : ''}>Analyse</p><p><FaGreaterThan /></p>
              </button>
            </Link>


            <Link to='/user'>
              <button
                className={selectedButton === 'button2' ? 'selected' : ''}
                onClick={() => setSelectedButton('button2')}
              >
                <i className="icon1"><p><img src={propic2} style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button2' ? 'selected' : ''}>User</p><p><FaGreaterThan /></p>
              </button>
            </Link>

            <Link to='/store'>
              <button
                className={selectedButton === 'button3' ? 'selected' : ''}
                onClick={() => setSelectedButton('button3')}
              >
                <i className="icon3"><p ><BsFillBagFill style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button3' ? 'selected' : ''}>Store</p><p><FaGreaterThan /></p>
              </button>
            </Link>

            <Link to='/gift'>
              <button
                className={selectedButton === 'button4' ? 'selected' : ''}
                onClick={() => setSelectedButton('button4')}
              >
                <i className="icon1"><p ><AiOutlineGift style={{ width: '30px', height: '30px' }} /></p>
                </i><p className={selectedButton === 'button4' ? 'selected' : ''}>Gift</p><p><FaGreaterThan /></p>
              </button></Link>


            <Link to='/ban'>
              <button
                className={selectedButton === 'button5' ? 'selected' : ''}
                onClick={() => setSelectedButton('button5')}
              >
                <i className="icon1"><p ><BiUserCircle style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button5' ? 'selected' : ''}>Ban</p><p><FaGreaterThan /></p>
              </button>
            </Link>

            <Link to='/level'>
              <button
                className={selectedButton === 'button6' ? 'selected' : ''}
                onClick={() => setSelectedButton('button6')}
              >
                <i className="icon1"><BsFillBarChartFill style={{ width: '30px', height: '30px' }} /></i>
                <p className={selectedButton === 'button6' ? 'selected' : ''}>Level</p><p><FaGreaterThan /></p>
              </button>
            </Link>



            <Link to='/recharge'> <button
              className={selectedButton === 'button7' ? 'selected' : ''}
              onClick={() => setSelectedButton('button7')}
            >
              <i className="icon1"><p ><AiOutlineDollar style={{ width: '30px', height: '30px' }} /></p></i>
              <p className={selectedButton === 'button7' ? 'selected' : ''}>Reharge</p><p><FaGreaterThan /></p>
            </button></Link>

            <Link to='/banner'>
              <button
                className={selectedButton === 'button8' ? 'selected' : ''}
                onClick={() => setSelectedButton('button8')}
              >
                <i className="icon1"><p ><BiClipboard style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button8' ? 'selected' : ''}>Banner</p><p><FaGreaterThan /></p>
              </button>
            </Link>


            <Link to='/salary'><button
              className={selectedButton === 'button9' ? 'selected' : ''}
              onClick={() => setSelectedButton('button9')}
            >
              <i className="icon1"><p ><BiUserCircle style={{ width: '30px', height: '30px' }} /></p></i>
              <p className={selectedButton === 'button9' ? 'selected' : ''}>Salary</p><p><FaGreaterThan /></p>
            </button></Link>

            <Link to='/sticker'>
              <button
                className={selectedButton === 'button10' ? 'selected' : ''}
                onClick={() => setSelectedButton('button10')}
              >
                <i className="icon1"><p ><BiUserCircle style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button10' ? 'selected' : ''}>Sticker</p><p><FaGreaterThan /></p>
              </button>
            </Link>



            <Link to='/ads'>
              <button
                className={selectedButton === 'button12' ? 'selected' : ''}
                onClick={() => setSelectedButton('button12')}
              >
                <i className="icon1"><p ><FaCrown style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button12' ? 'selected' : ''}>Ads</p><p><FaGreaterThan /></p>
              </button>
            </Link>

            <Link to='/reward'>
              <button
                className={selectedButton === 'button15' ? 'selected' : ''}
                onClick={() => setSelectedButton('button15')}
              >
                <i className="icon1"><p ><AiOutlineDollarCircle style={{ width: '30px', height: '30px' }} /></p></i>
                <p className={selectedButton === 'button15' ? 'selected' : ''}>Reward</p><p><FaGreaterThan /></p>
              </button>
            </Link>
            {
              !user && <Link to='/'>
                <button
                  className={selectedButton === 'button13' ? 'selected' : ''}
                  onClick={() => setSelectedButton('button13')}
                >
                  <i className="icon1"><p ><AiOutlineDollarCircle style={{ width: '30px', height: '30px' }} /></p></i>
                  <p className={selectedButton === 'button13' ? 'selected' : ''}>Admin</p><p><FaGreaterThan /></p>
                </button>
              </Link>
            }




            <Link to='/subAdmin'>     <button
              className={selectedButton === 'button14' ? 'selected' : ''}
              onClick={() => setSelectedButton('button14')}
            >
              <i className="icon1"><p ><MdOutlineAdminPanelSettings style={{ width: '30px', height: '30px' }} /></p></i>
              <p className={selectedButton === 'button14' ? 'selected' : ''}>SubAdmin</p><p><FaGreaterThan /></p>
            </button>
            </Link>



            <button
              className={selectedButton === 'button11' ? 'selected' : ''}
              onClick={() => {
                setSelectedButton('button11');
                localStorage.setItem('isLogin', 'false');

                navigate("/")

                console.log(localStorage)
                localStorage.clear()
                showNotification("Logout successfully", "Success");
                window.location.reload();
              }}
            >

              <i className="icon1">
                <p><AiOutlineLogin style={{ width: '30px', height: '30px' }} /></p>
              </i>
              <p className={selectedButton === 'button11' ? 'selected' : ''}>
                {localStorage.getItem('isLogin') === 'true' ? 'Sign Out' : 'Sign_In'}
              </p>
              <p><FaGreaterThan /></p>
            </button>



          </div>




























        </div>
      </div>




    </>
  )
}

export default SideBoard