import React, { useState } from 'react';
import './level.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Level = () => {
  const [form, setForm] = useState('');
  const [giftDetails, setGiftDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const coin = e.target.coin.value;
    const image = e.target.image.files[0];

    const newGift = {
      Sr: giftDetails.length + 1,
      Title: title,
      Image: image,
      coin: coin,
      Status: 'Approved',
      Sound: <audio controls><source src="horse.ogg" type="audio/ogg"></source></audio>,
      Action: 'Action'
    };

    setGiftDetails([...giftDetails, newGift]);
    e.target.reset();
    setForm('');
  };

  const handleGift = () => {
    form === 'Active' ? setForm('') : setForm('Active');
  };

  const handleCancel = () => {
    form === 'Active' ? setForm('') : setForm('Active');
  };

  const GiftDetails = [
    // Gift objects
  ];

  const GiftList = ({ Sr, Title, Image, coin, Action }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(Title);
    const [editedCoin, setEditedCoin] = useState(coin);

    const handleEditGift = () => {
      setIsEditing(true);
    };

    const handleSaveGift = () => {
      const updatedGiftDetails = [...giftDetails];
      const giftIndex = updatedGiftDetails.findIndex((gift) => gift.Sr === Sr);

      if (giftIndex !== -1) {
        updatedGiftDetails[giftIndex].Title = editedTitle;
        updatedGiftDetails[giftIndex].coin = editedCoin;
        setGiftDetails(updatedGiftDetails);
        setIsEditing(false);
      }
    };

    const handleRemoveGift = () => {
      const updatedGiftDetails = giftDetails.filter((gift) => gift.Sr !== Sr);
      setGiftDetails(updatedGiftDetails);
    };

    return (
      <tr>
        <td>{Sr}</td>
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            Title
          )}
        </td>
        <td>
          <img
            src={URL.createObjectURL(Image)}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </td>
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedCoin}
              onChange={(e) => setEditedCoin(e.target.value)}
            />
          ) : (
            coin
          )}
        </td>
        <td>
          {isEditing ? (
            <button className='actionButton' onClick={handleSaveGift}>
              Save
            </button>
          ) : (
            <>
              <div className='columnComn'>
                <button className='actionButton'>
                  Action
                  <span className='dropdownIcon'><IoMdArrowDropdown /></span>
                </button>
                <div className='dropdownContent'>
                  <a href='#' onClick={handleEditGift}>Edit Gift</a>
                  <a href='#' onClick={handleRemoveGift}>Remove Gift</a>
                </div>
              </div>
            </>
          )}
        </td>
      </tr>
    );
  };

  const ITEMS_PER_PAGE = 3;
  const [currentGiftPage, setCurrentGiftPage] = useState(1);
  const startIndex = (currentGiftPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = GiftDetails.slice(startIndex, endIndex);
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
    <div className='cont'>
      <div style={{ width: '100%' }}>
        <div className='giftNavFlax'>
          <p>All Level</p>
          {/* <p>Dashbaord</p> */}
        </div>
        <button className='addGift' onClick={handleGift}> Add Level</button>
        {form === 'Active' && (
          <div>
            <form onSubmit={handleSubmit}>
              <input type='text' name='title' placeholder='Title*' />
              <input type='number' name='coin' placeholder='Coin*' />
              <input type='file' name='image' />
              <div className='twoBtn'>
                <button onClick={handleCancel}>Cancel</button>
                <button type='submit'>Add Level</button>
              </div>
            </form>
          </div>
        )}
        <div className='border'>
          <table>
            <thead>
              <tr className='lowerDivTablea'>
                <th>Sr.</th>
                <th>Name</th>
                <th>Icon</th>
                <th>Coin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {giftDetails.map((gift) => (
                <GiftList key={gift.Sr} {...gift} />
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
    </div>
  );
};

export default Level;
