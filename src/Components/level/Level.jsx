import React, { useState } from 'react';
import './level.css';

import Switch from 'react-switch';
import { IoMdArrowDropdown } from 'react-icons/io';
import angry from './imggg/angry.jpg';
import funny from './imggg/1568385-middle.png';
import kiss from './imggg/246-2463660_emoji-kiss-icon-2-clip-art-kiss-emoji-png.png';
import baer from './imggg/iphone-bear-emoji-115499115065cr6gccnmq.png';
import butterfly from './imggg/307-3073021_blue-butterfly-emoji.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import showNotification from '../../helpers/show_notification';
import axios from 'axios';
import { useEffect } from 'react';


const Level = () => {
  const [form, setForm] = useState("")


  //yaha chalu
  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  const token = localStorage.getItem("userToken");
  const [alllevel, setAllLevel] = useState([]);
  useEffect(() => {
    loadLevel();
  }, [])

  const loadLevel = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/getAll-levels`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.status === true) {
      console.log(data.data, "data")
      setAllLevel(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
      setAllLevel(data.data);
    }


  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data


    const coin = e.target.coin.value;
    const image = e.target.image.files[0];


    const formData = new FormData();
    formData.append('store', image);
    formData.append('coinRequire', coin);
    formData.append('createdBy', user._id);



    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/add-levels`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.status);
      if (response.data.status === true) {
        showNotification(response.data.message, "Success");
        loadLevel();
      } else {
        showNotification(response.data.message, "Error");

      }
    } catch (error) {
      console.error(error);
    }
    e.target.reset();
    setForm("")
  };
  const [selectedValue, setSelectedValue] = useState('helper');

  const [isOn, setIsOn] = useState(false);

  const handleToggle = (checked) => {
    setIsOn(checked);
  };

  const handleDecisionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //yaha chalu
  const [giftDetails, setGiftDetails] = useState([]);



  // console.log(giftDetails[0].Image.name)
  //yaha tk

  const handleGift = () => {
    form == "Active" ? setForm("") : setForm("Active")
  }
  const handleCancel = () => {
    form == "Active" ? setForm("") : setForm("Active")
  }
  const GiftDetails = [
    {
      Sr: '01',
      Title: 'Angry',
      Image: angry,

      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      )
    },

    {
      Sr: '02',
      Title: 'Bear',
      Image: baer,

      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      )
    },

    {
      Sr: '03',
      Title: 'Funny',
      Image: funny,
      Thumbnail: funny,
      coin: 60,

      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      )
    },

    {
      Sr: '04',
      Title: 'Kiss',
      Image: kiss,

      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      )
    },

    {
      Sr: '05',
      Title: 'Butterfly',
      Image: butterfly,

      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionUser'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      )
    },
  ]

  //yaha chaluu2
  const LevelList = ({ Sr, _id, title, levelImgUrl, coinRequire, actionBy }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedCoin, setEditedCoin] = useState(coinRequire);

    const handleEditGift = () => {
      setIsEditing(true);
    };

    const handleSaveGift = () => {
      // Update the gift details based on the edited values
      // You can perform any necessary validations or API calls here
      // For demonstration purposes, we are simply updating the state directly

      // Create a copy of the gift details array
      const updatedGiftDetails = [...giftDetails];

      // Find the index of the gift to be edited
      const giftIndex = updatedGiftDetails.findIndex((gift) => gift.Sr === Sr);

      if (giftIndex !== -1) {
        // Update the title and coin of the gift
        updatedGiftDetails[giftIndex].Title = editedTitle;
        updatedGiftDetails[giftIndex].coin = editedCoin;

        // Update the gift details state
        setGiftDetails(updatedGiftDetails);

        // Exit edit mode
        setIsEditing(false);
      }
    };


    const handleRemoveGift = async (id) => {
      console.log(id);
      try {
        const response = await axios.post(`http://13.233.229.68:8008admin/delete-levels`, { levelId: id });
        console.log(response);
        if (response.data.status === true) {
          showNotification(response.data.message, "Success");

          loadLevel();
        } else {
          showNotification(response.data.message, "Error");

        }
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <tr className='giftRow'>
        <td>{Sr}</td>
        {/* <td>
          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            title
          )}
        </td> */}
        <td>
          <img
            src={levelImgUrl}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </td>
        {/* <td>
          <img
            src={URL.createObjectURL(Thumbnail)}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </td> */}
        {/* <td>
          {isEditing ? (
            <input
              type='text'
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
            />
          ) : (
            coinRequire
          )}
        </td> */}
        <p className='column'>
          {isEditing ? (
            <input
              type='text'
              value={editedCoin}
              name='coin'
              onChange={(e) => setEditedCoin(e.target.value)}
            />
          ) : (
            coinRequire
          )}
        </p>
        <td >
          {actionBy[0] && actionBy[0].username}
        </td>
        {/* <td>
          <div className='status'>
            <p className='status-text'>{Status}</p>
          </div>
        </td> */}

        {/* <td>{Sound}</td> */}
        {/* <td>{createdBy}</td> */}
        <td>
          <div className='actionButtons'>
            {isEditing ? (
              <button className='actionButton' onClick={() => {
                // handleUpdate(_id);
              }}>
                Save
              </button>
            ) : (
              <>
                <div className='columnComn'>
                  <button className='actionButton'>
                    Action
                    <span className='dropdownIcon'>
                      <IoMdArrowDropdown />
                    </span>
                  </button>
                  <div className='dropdownContent' >
                    {/* <a href='#' onClick={handleEditGift}>Edit</a> */}
                    <a href='#' onClick={() => {
                      handleRemoveGift(_id);
                    }}>Remove </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </td>
        <td>

          {/* <select
            // value={selectedValue}
            // onChange={handleDecisionChange}
            id='decisionUser'
          >
            <option value=''>Select an option</option>
            <option value='Subadmin'>Sub Admin</option>
            <option value='countyadmin'>Country Admin</option>
            <option value='helper'>Helper</option>
            <option value='Superuser'>Super User</option>
          </select> */}

        </td>
      </tr>
    );
  };

  //yaha tak2

  // adding pagtion 

  const ITEMS_PER_PAGE = 3; // Number of items to display per page

  const [currentGiftPage, setCurrentGiftPage] = useState(1);

  // Calculate the index range of items to display based on the current page
  const startIndex = (currentGiftPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the current page's data
  const currentPageData = GiftDetails.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(GiftDetails.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentGiftPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentGiftPage === i ? 'active' : ''}
          id='pageNo'
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handleNextPage = () => {
    if (currentGiftPage < totalPages) {
      setCurrentGiftPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentGiftPage > 1) {
      setCurrentGiftPage((prevPage) => prevPage - 1);
    }
  };




  return (
    <>



      <div className='levelConnterrr'>

        <div className='giftNavFlax'>
          <p>All Level</p>

          {/* <p>Dashbaord</p> */}
        </div>

        <button className='addGift' onClick={handleGift} > Add Level</button>

        {/* attach to button "add gift" */}
        {form == "Active" &&
          <div class="pageWrappera">
            <div class="blurBackground"></div>

            <div className='blurForml'>
              <p className='title' style={{ marginLeft: "20px", display: 'flex', justifyContent: 'center', fontSize: "20px" }}>Level</p>
              <div>
                <form onSubmit={handleSubmit} className='divFirstform'>






                  {/* <input type="text" name="title" placeholder='Name*' /> */}


                  <input type="number" name="coin" placeholder='Coin*' />
                  {/* <input type="text" name="decision" placeholder='Decision*' /> */}




                  <input type="file" name="image" />
                  <div>
                    <label>{isOn ? <>Show Off</> : <>Show on</>}</label><br />
                    <Switch checked={isOn} onChange={handleToggle} />
                  </div>


                  <div className='twoBtn'>
                    <button
                      onClick={handleCancel}
                      // type='reset'
                      style={{
                        backgroundColor: 'rgb(255, 87, 34)',
                        border: 'none',
                        borderRadius: '5px',
                        color: 'white',
                        padding: '10px'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      style={{
                        borderRadius: '5px',
                        border: 'none',
                        color: 'white',
                        padding: '10px'
                      }}
                    >
                      Add Level
                    </button>
                  </div>
                </form>


              </div>

            </div>
          </div>}



        <div className='border'>
          <table>
            <thead>
              <tr className='lowerDivTablea'>
                <th>Sr.</th>
                <th>img</th>
                <th>Coin</th>
                <th>Decision</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {alllevel && alllevel.map((gift) => (

                <LevelList key={gift.Sr} {...gift} />
              ))}
            </tbody>
          </table>
          <div className='pagination'>
            <button onClick={handlePreviousPage} disabled={currentGiftPage === 1} id='pageNo'>
              <BsArrowLeft />
            </button>
            {getPageNumbers()}
            <button onClick={handleNextPage} disabled={currentGiftPage === totalPages} id='pageNo'>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Level
