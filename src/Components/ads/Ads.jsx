import React, { useEffect, useState } from 'react';
import './Ads.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import angry from './imggg/angry.jpg';
import funny from './imggg/1568385-middle.png';
import kiss from './imggg/246-2463660_emoji-kiss-icon-2-clip-art-kiss-emoji-png.png';
import baer from './imggg/iphone-bear-emoji-115499115065cr6gccnmq.png';
import butterfly from './imggg/307-3073021_blue-butterfly-emoji.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import showNotification from '../../helpers/show_notification';
import axios from 'axios';



const Ads = () => {
  const [form, setForm] = useState("")
  const [selectedValue, setSelectedValue] = useState('helper');
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    loadGifts();
  }, [])

  //yaha chalu
  const [id, setId] = useState()
  const [giftDetails, setGiftDetails] = useState([]);
  const [allad, setAllAd] = useState([]);
  const loadGifts = async () => {
    console.log("j");
    const { data } = await axios.post(`http://13.233.229.68:8008/admin/ad/get/1`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.status === true) {
      console.log(data.data, "data")
      setAllAd(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
      setAllAd(data.data);
    }


  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const url = e.target.url.value;

    // Create a new gift object
    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/addAd`, { url: url });
      console.log(response.data.status);
      if (response.data.status === true) {
        showNotification(response.data.message, "Success");
        loadGifts();

      } else {
        showNotification(response.data.message, "Error");

      }
    } catch (error) {
      console.error(error);
    }

    // Clear form fields
    e.target.reset();
    setForm("")
  };

  const handleDecisionChange = (event) => {
    setSelectedValue(event.target.value);
  };
  //yaha chalu


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
      Thumbnail: angry,
      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    },

    {
      Sr: '02',
      Title: 'Bear',
      Image: baer,
      Thumbnail: baer,
      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    },

    {
      Sr: '03',
      Title: 'Funny',
      Image: funny,
      Thumbnail: funny,
      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    },

    {
      Sr: '04',
      Title: 'Kiss',
      Image: kiss,
      Thumbnail: kiss,
      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    },

    {
      Sr: '05',
      Title: 'Butterfly',
      Image: butterfly,
      Thumbnail: butterfly,
      coin: 60,
      Status: 'Approved',
      Sound: <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    },
  ]

  //yaha chaluu2
  const GiftList = ({ Sr, _id, title, Image, Thumbnail, url, coin, status, Sound }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(url);
    const [editedCoin, setEditedCoin] = useState(coin);
    const handleUpdate = async (e) => {
      e.preventDefault();

      // const image = e.target.image.files[0];
      const formData = new FormData();
      formData.append('url', editedTitle);
      formData.append('AdId', id);

      // formData.append('createdBy', user._id);



      // Create a new gift object
      try {
        const response = await axios.put(`http://13.233.229.68:8008admin/ad/update`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response);
        if (response.data.status === true) {
          showNotification(response.data.message, "Success");

          loadGifts();
        } else {
          showNotification(response.data.message, "Error");

        }
      } catch (error) {
        console.error(error);
      }

      // Clear form fields

      setForm("")
    };
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
        const response = await axios.delete(`http://13.233.229.68:8008admin/ad/delete/${id}`);
        console.log(response);
        if (response.data.status === true) {
          showNotification(response.data.message, "Success");

          loadGifts();
        } else {
          showNotification(response.data.message, "Error");

        }
      } catch (error) {
        console.error(error);
      }
    };


    return (
      <div className='myGiftDivd'>
        <p className='column' style={{ marginRight: '10px' }}>{Sr}</p>
        <p className='columnT' style={{ marginRight: '20px' }}>

          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            url
          )}
        </p>
        <p>{status}</p>



        <div className='columnComn'>
          {isEditing ? (
            <button className='actionButton' onClick={handleUpdate}>
              Save
            </button>
          ) : (
            <>
              <div className='columnComn' style={{ position: 'relative', top: -12, left: -25 }}>
                <button className='actionButton'>
                  Action
                  <span className='dropdownIcon'><IoMdArrowDropdown /></span>
                </button>
                <div className='dropdownContent' onClick={setId(_id)}>
                  <a href='#' onClick={handleEditGift}>Edit Gift</a>
                  <a href='#' onClick={() => {
                    handleRemoveGift(_id);
                  }}>Remove Gift</a>
                </div>
              </div>


            </>
          )}
        </div>
        <p>
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
        </p>
      </div>
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
      <div style={{ width: '98%' }}>

        <div className='giftNavFlax'>
          <p>All Ads</p>

          {/* <p>Dashbaord</p> */}
        </div>

        <button className='addGift' onClick={handleGift} > Add Ads</button>

        {/* attach to button "add gift" */}
        {form == "Active" &&
          <div class="pageWrapper">
            <div class="blurBackground"></div>
            <div className='blurFormd'>
              <div>
                <form onSubmit={handleSubmit} className='divFirstformh'>
                  <p className='titleg'>Add Ads</p>


                  <label>Url*</label>
                  <input type="text" name="url" />




                  <div className='twoBtnd'>
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
                        backgroundColor: '#1DA1F2',
                        border: 'none',
                        color: 'white',
                        padding: '10px'
                      }}
                    >
                      Add Ads
                    </button>
                  </div>
                </form>


              </div>

            </div>
          </div>}





        <div className='borderd'>
          <div className='lowerDivTabled'>
            <p className='column'>Sr.</p>

            <p className='columnT'>url</p>

            <p className='column'>Status</p>
            <p className='columnComn'>Action</p>
            <p className='columnComn'>Decision</p>
          </div>

          {/* <div>
      {GiftDetails.map(Aghori =>(
            <GiftList key={Aghori.Sr} {...Aghori} />
           ))

           }
      </div> */}

          {/* <div>
        {currentPageData.map((Aghori) => (
          <GiftList key={Aghori.sl} {...Aghori} />
        ))}
      </div> */}

          {/* by form */}
          <div>
            {allad && allad.map((gift) => (

              <GiftList key={gift.Sr} {...gift} />
            ))}
          </div>

          <div className='pagination' style={{ display: 'flex', justifyContent: 'center', maxWidth: '1200px' }}>
            <button onClick={handlePreviousPage} disabled={currentGiftPage === 1} id='pageNo' >
              <BsArrowLeft />
            </button>
            {getPageNumbers()}
            <button onClick={handleNextPage} disabled={currentGiftPage === totalPages} id='pageNo' >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Ads