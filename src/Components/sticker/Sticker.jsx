import React, { useEffect, useState } from 'react';
import './sticker.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import angry from './imggg/angry.jpg';
import funny from './imggg/1568385-middle.png';
import kiss from './imggg/246-2463660_emoji-kiss-icon-2-clip-art-kiss-emoji-png.png';
import baer from './imggg/iphone-bear-emoji-115499115065cr6gccnmq.png';
import butterfly from './imggg/307-3073021_blue-butterfly-emoji.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';



const Sticker = () => {
  const token = localStorage.getItem("userToken");
  const [allStickers, setAllStickers] = useState()
  useEffect(() => {
    loadStickers();
  }, [token])
  const [form, setForm] = useState("")
  const [id, setId] = useState()

  const loadStickers = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/sticker/getall`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.success === 'true') {
      console.log(data.data, "data")
      setAllStickers(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
      setAllStickers(data.data);
    }


  };
  //yaha chalu
  const [giftDetails, setGiftDetails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append('title', title);
    formData.append('store', image);


    // Create a new gift object
    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/add-sticker`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.status);
      if (response.data.status === true) {
        showNotification(response.data.message, "Success");

        loadStickers();
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
  console.log(id, "id");


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
  const GiftList = ({ _id, Sr, title, url, Thumbnail, coin, Status, Sound }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedCoin, setEditedCoin] = useState(coin);

    const handleEditGift = () => {
      setIsEditing(true);
    };

    const handleSaveGift = () => {
      // Update the gift details based on the edited values
      // You can perform any necessary validations or API calls here
      // For demonstration purposes, we are simply updating the state directly

      // Create a copy of the gift details array
      const updatedGiftDetails = [allStickers];

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
    const handleUpdate = async (e) => {
      e.preventDefault();



      const formData = new FormData();
      formData.append('title', editedTitle);



      // Create a new gift object
      try {
        const response = await axios.put(`http://13.233.229.68:8008admin/sticker/update/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data.status);
        if (response.data.status === true) {
          showNotification(response.data.message, "Success");

          loadStickers();
        } else {
          showNotification(response.data.message, "Error");

        }
      } catch (error) {
        console.error(error);
      }

      // Clear form fields

      setForm("")
    };
    const handleRemoveGift = () => {
      const updatedGiftDetails = giftDetails.filter((gift) => gift.Sr !== Sr);
      setGiftDetails(updatedGiftDetails);
    };
    console.log(isEditing);
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
            title
          )}
        </p>


        <p className='columnComn'>
          <img
            src={url}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          /></p>



        <div className='columnComn'>
          {isEditing ? (
            <button className='actionButton' onClick={handleUpdate}>
              Save
            </button>
          ) : (
            <>
              <div className='columnComn'>
                <button className='actionButtong'>
                  Action
                  <span className='dropdownIcon'><IoMdArrowDropdown /></span>
                </button>
                <div className='dropdownContentg' onClick={setId(_id)}>
                  <a href='#' onClick={
                    handleEditGift
                  }>Edit </a>
                  <a href='#' onClick={handleRemoveGift}>Remove </a>
                </div>
              </div>

            </>
          )}
        </div>
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
          <p>Manage Live Sticker</p>

          {/* <p>Dashbaord</p> */}
        </div>

        <button className='addGift' onClick={handleGift} > Add Sticker</button>

        {/* attach to button "add gift" */}
        {form == "Active" &&
          <div class="pageWrapper">
            <div class="blurBackground"></div>
            <div className='blurFormd'>
              <div>
                <form onSubmit={handleSubmit} className='divFirstform'>
                  <p className='titleg'>Add Sticker</p>



                  <label>Title*</label>
                  <input type="text" name="title" />

                  <label>Image*</label>
                  <input type="file" name="image" />




                  <div className='twoBtn'>
                    <button
                      onClick={handleCancel}
                      // type='reset'
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
                      type='submit'
                      style={{
                        backgroundColor: '#007bff',
                        border: 'none',
                        color: 'white',
                        padding: '5px'
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>


              </div>

            </div>
          </div>}





        <div className='borderd'>
          <div className='lowerDivTabled'>
            <p className='column'>Sr.</p>
            <p className='columnT'>Title</p>

            <p className='column'>Image</p>

            <p className=' cola'>Action</p>
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
            {allStickers && allStickers.map((gift) => (

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

export default Sticker