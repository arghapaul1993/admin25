import React, { useState } from 'react';
import './banner.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import angry from './imggg/angry.jpg';
import funny from './imggg/1568385-middle.png';
import kiss from './imggg/246-2463660_emoji-kiss-icon-2-clip-art-kiss-emoji-png.png';
import baer from './imggg/iphone-bear-emoji-115499115065cr6gccnmq.png';
import butterfly from './imggg/307-3073021_blue-butterfly-emoji.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import showNotification from './../../helpers/show_notification';
import { useEffect } from 'react';




const Banner = () => {
  const [form, setForm] = useState("")


  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  const token = localStorage.getItem("userToken");
  //yaha chalu
  useEffect(() => {
    loadGifts();
  }, [])
  const [giftDetails, setGiftDetails] = useState([]);

  const [selectedValue, setSelectedValue] = useState('helper');
  const [allgifts, setAllGift] = useState([]);
  const [photo, setPhoto] = useState();
  const [id, setId] = useState()
  const loadGifts = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/banner/getAll`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.status === true) {
      console.log(data.data, "data")
      setAllGift(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
      setAllGift(data.data);
    }


  };

  const handleSubmit = async (e) => {
    console.log(user._id, "jkjk");
    e.preventDefault();

    const link = e.target.link.value;
    const whatsapp = e.target.whatsapp.value;
    const title = e.target.title.value;
    const formData = new FormData();

    formData.append('name', title);
    formData.append('store', photo);
    formData.append('whatsapp', whatsapp);
    formData.append('link', link);
    formData.append('createdBy', user._id);


    // Create a new gift object
    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/banner/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
      if (response.data.data) {
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
  const GiftList = ({ Sr, _id, name, image, whatsapp, link, actionBy }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(name);
    const [editedLink, setEditedLink] = useState(link);
    const [editedwhatsapp, setEditedWhatsapp] = useState(whatsapp);

    const handleEditGift = () => {
      setIsEditing(true);
    };
    const handleUpdate = async (e) => {
      e.preventDefault();

      // const image = e.target.image.files[0];

      console.log("hkjhk");
      const formData = new FormData();

      formData.append('name', editedTitle);
      formData.append('store', photo);
      formData.append('whatsapp', whatsapp);
      formData.append('link', link);
      // formData.append('coin', editedCoin);
      // formData.append('createdBy', user._id);



      // Create a new gift object
      try {
        const response = await axios.put(`http://13.233.229.68:8008admin/banner/update/${id}`, formData, {
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
        // updatedGiftDetails[giftIndex].Title = editedTitle;
        // updatedGiftDetails[giftIndex].coin = editedCoin;

        // Update the gift details state
        setGiftDetails(updatedGiftDetails);

        // Exit edit mode
        setIsEditing(false);
      }
    };

    const handleRemoveGift = async (id) => {
      console.log(id);
      try {
        const response = await axios.delete(`http://13.233.229.68:8008admin/banner/delete/${id}`);
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

    const handleDecisionChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
      <tr className='myGiftDiv'>
        <td className='column' style={{ marginRight: '10px' }}>{Sr}</td>
        <p className='columnT' style={{ marginRight: '20px' }}>
          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            name
          )}
        </p>
        <p className='columnComn'>
          <img
            src={image}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </p>

        <p className='column' style={{ width: 80 }}>
          {isEditing ? (
            <input
              type='text'
              value={editedLink}
              onChange={(e) => setEditedLink(e.target.value)}
            />
          ) : (
            link
          )}
        </p>
        <p className='column' style={{ width: 60 }}>
          {isEditing ? (
            <input
              type='text'
              value={editedwhatsapp}
              onChange={(e) => setEditedWhatsapp(e.target.value)}
            />
          ) : (
            whatsapp
          )}
        </p>
        <p style={{ position: 'relative', right: -30 }}>
          {/* <select
            value={selectedValue}
            onChange={handleDecisionChange}
            id='decisionUser'
          >
            <option value=''>Select an option</option>
            <option value='Subadmin'>Sub Admin</option>
            <option value='countyadmin'>Country Admin</option>
            <option value='helper'>Helper</option>
            <option value='Superuser'>Super User</option>
          </select> */}
          {actionBy[0] && actionBy[0].username}
        </p>
        <div className='columnComn'>
          {isEditing ? (
            <button className='actionButton' onClick={handleUpdate}>
              Save
            </button>
          ) : (
            <>
              <div className='columnComn'>
                <button className='actionButton' style={{ position: 'relative', top: -10, marginLeft: 20 }}>
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
      <div style={{ width: '98%' }}>

        <div className='giftNavFlax'>
          <p>All Banner</p>

          {/* <p>Dashbaord</p> */}
        </div>

        <button className='addGift' onClick={handleGift} > Add Banner</button>

        {/* attach to button "add gift" */}
        {form == "Active" &&
          <div class="pageWrapper">
            <div class="blurBackground"></div>
            <div className='blurFormi'>
              <div>
                <form onSubmit={handleSubmit} className='divFirstform'>
                  <p className='titleh'>Add Live Banner</p>
                  <label>Image</label>
                  <input type="file" name="image" onChange={(e) => setPhoto(e.target.files[0])} />

                  <label>Name</label>
                  <input type="text" name="title" />
                  {/* <label>Status</label> */}
                  {/* <select name="status" id="status" defaultValue="" >
                    <option value="" disabled>
                      Please select a status
                    </option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                  </select> */}

                  {/* <label>Title*</label>
                  <input type="text" name="title" /> */}

                  <label>Links*</label>
                  <input type="text" name="link" />
                  <label>Whatsapp no.*</label>
                  <input type="number" name="whatsapp" />
                  <div className='twoBtnj'>
                    <button
                      onClick={handleCancel}
                      // type='reset'
                      style={{
                        backgroundColor: 'rgb(255, 87, 34)',
                        border: 'none',

                        color: 'white',
                        borderRadius: '10px',
                        padding: '20px'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      style={{
                        backgroundColor: ' #1DA1F2',
                        border: 'none',
                        color: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                      }}
                    >
                      Add Banner
                    </button>
                  </div>
                </form>


              </div>

            </div>
          </div>}





        <div className='border'>
          <div className='lowerDivTable'>
            <p className='column'>Sr.</p>
            <p className='columnT'>Title</p>
            <p className='columnComn'>Image</p>
            <p className='columnComn'>Link</p>
            <p className='columnComn'>Whatsapp</p>
            <p className='columnComn'>Decision</p>
            <p className='columnComn'>Action</p>

          </div>
          <br />
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
            {allgifts && allgifts.map((gift) => (

              <GiftList key={gift.sr}{...gift} />
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

export default Banner;