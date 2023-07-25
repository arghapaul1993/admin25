import React, { useEffect, useState } from 'react';
import './Gift.css';

import { IoMdArrowDropdown } from 'react-icons/io';
import angry from './imggg/angry.jpg';
import funny from './imggg/1568385-middle.png';
import kiss from './imggg/246-2463660_emoji-kiss-icon-2-clip-art-kiss-emoji-png.png';
import baer from './imggg/iphone-bear-emoji-115499115065cr6gccnmq.png';
import butterfly from './imggg/307-3073021_blue-butterfly-emoji.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import showNotification from '../../helpers/show_notification';
import axios from 'axios';

const Gift = () => {

  const [form, setForm] = useState("")
  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    loadGifts();
  }, [])
  //yaha chalu

  const [giftDetails, setGiftDetails] = useState([]);
  const [allgifts, setAllGift] = useState([]);
  const [photo, setPhoto] = useState();
  const [vat, setVat] = useState()
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [coin, setCoin] = useState()
  const loadGifts = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/gifts/getAll`,
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

    // const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append('name', title);
    formData.append('store', photo);
    formData.append('category', category);
    formData.append('vat', vat);
    formData.append('coin', coin);
    formData.append('createdBy', user._id);


    // Create a new gift object
    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/gifts/add`, formData, {
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

    setForm("")
  };

  const handleGift = () => {
    form === "Active" ? setForm("") : setForm("Active");
  };

  const handleCancel = () => {
    form === "Active" ? setForm("") : setForm("Active");
  };

  const GiftList = ({ Sr, _id, actionBy, name, category, image, vat, Thumbnail, coin, Status, Sound }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(name);
    const [editedCoin, setEditedCoin] = useState(coin);
    const [editedCategory, setEditedCategory] = useState(category);
    const [editedVat, setEditedVat] = useState(vat);

    const handleEditGift = () => {
      setIsEditing(true);
    };

    const handleUpdate = async (id) => {


      // const image = e.target.image.files[0];
      const formData = new FormData();
      formData.append('name', editedTitle);
      formData.append('store', photo);
      formData.append('category', editedCategory);
      formData.append('coin', editedCoin);
      formData.append('vat', editedVat);
      // formData.append('createdBy', user._id);



      // Create a new gift object
      try {
        const response = await axios.put(`http://13.233.229.68:8008/admin/gifts/update/${id}`, formData, {
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
        const response = await axios.delete(`http://13.233.229.68:8008/admin/gifts/delete/${id}`);
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
      <tr className='giftRow'>
        <td>{Sr}</td>
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            name
          )}
        </td>
        <td>
          <img
            src={image}
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
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
            />
          ) : (
            category
          )}
        </td>
        <p className='column'>
          {isEditing ? (
            <input
              type='text'
              value={editedCoin}
              name='coin'
              onChange={(e) => setEditedCoin(e.target.value)}
            />
          ) : (
            coin
          )}
        </p>
        <td >
          {isEditing ? (
            <input
              type='text'
              value={editedVat}
              name='vat'
              onChange={(e) => setEditedVat(e.target.value)}
            />
          ) : (
            vat
          )}
        </td>
        {/* <td>
          <div className='status'>
            <p className='status-text'>{Status}</p>
          </div>
        </td> */}

        {/* <td>{Sound}</td> */}
        <td>  {actionBy[0] && actionBy[0].username}</td>
        <td>
          <div className='actionButtons'>
            {isEditing ? (
              <button className='actionButton' onClick={() => {
                handleUpdate(_id);
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
                    <a href='#' onClick={handleEditGift}>Edit Gift</a>
                    <a href='#' onClick={() => {
                      handleRemoveGift(_id);
                    }}>Remove Gift</a>
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


  const ITEMS_PER_PAGE = 3; // Number of items to display per page

  const [currentGiftPage, setCurrentGiftPage] = useState(1);

  // Calculate the index range of items to display based on the current page
  const startIndex = (currentGiftPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the current page's data
  const currentPageData = giftDetails.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(giftDetails.length / ITEMS_PER_PAGE);

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
      <div className='giftConatinerrr'>
        <div className='giftNavFlax'>
          <p>All Gift</p>
          {/* <p>Dashbaord</p> */}
        </div>
        <button className='addGift' onClick={handleGift}>
          Add Gift
        </button>

        {form === "Active" && (
          <div class="pageWrapper">
            <div class="blurBackground"></div>
            <div
              style={{ top: 200, position: 'relative' }}
              className='blurForm'
            >
              <form onSubmit={handleSubmit} className='divFirstform'>
                <p className='title'>Add Live Gift</p>

                <label>Category List</label>
                <select name="category" id="category" defaultValue="" onChange={(e) => setCategory(e.target.value)} >
                  <option value="" disabled>
                    Please select a category
                  </option>
                  <option value="Lucky">Lucky</option>
                  <option value="Popular">Popular</option>
                  <option value="Luxary">Luxary</option>
                  <option value="Customize">Customize</option>
                  <option value="Random">Random</option>
                </select>

                <label>Title*</label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />

                <label>Coin*</label>
                <input type="number" name="coin" onChange={(e) => setCoin(e.target.value)} />
                <label>Vat % *</label>
                <input type="number" name="coin" onChange={(e) => setVat(e.target.value)} />

                <label>Image*</label>
                <input type="file" name="image" onChange={(e) => setPhoto(e.target.files[0])} />

                <label>Thumbnail*</label>
                <input type="file" name="thumbnail" />

                <label>Sound*</label>
                <input type="file" name="sound" />


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
                    onClick={handleSubmit}
                    type='submit'
                    style={{
                      backgroundColor: '#3c99dc',
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
        )}

        <table className='giftTable'>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Image</th>
              <th>Category</th>
              <th>Coin</th>
              <th>Vat %</th>
              <th>Decision</th>
              {/* <th>Status</th> */}
              {/* <th>Sound</th>
              <th>Vat %</th> */}
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {allgifts && allgifts.map((gift) => (

              <GiftList key={gift._id}{...gift} />
            ))}
          </tbody>
        </table>

        <div className='pagination' style={{ display: 'flex', justifyContent: 'center', maxWidth: '1200px' }}>
          <button onClick={handlePreviousPage} disabled={currentGiftPage === 1} id='pageNo'>
            <BsArrowLeft />
          </button>
          {getPageNumbers()}
          <button onClick={handleNextPage} disabled={currentGiftPage === totalPages} id='pageNo'>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Gift;
