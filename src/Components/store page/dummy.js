import React, { useState } from 'react';
import './Store.css';
import { FaEdit } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import car1 from './imgg/honda-cbr-150-price 1.png';
import car2 from './imgg/images (1).png';
import car3 from './imgg/images (4).png';
import car4 from './imgg/images (5).png';
import { IoMdArrowDropdown } from 'react-icons/io';

const Store = () => {
  const StoreDetail = [
    // {
    //   sl: '01',
    //   ProImages: car1,
    //   ProName: 'Content here,  ',
    //   Category: 'Entry',
    //   price1: '$15,0000',
    //   price2: '$25,000',
    //   price3: '$45,000',
    //   action: <FaEdit />,
    // },
    // other data objects...
  ];

  const StoreList = ({ sl, ProImages, ProName, Category, price1, price2, price3, action, decision }) => {
    // editing
    const [isEditing, setIsEditing] = useState(false);
    const [editedProName, setEditedProName] = useState(ProName);
    const [editedCategory, setEditedCategory] = useState(Category);
    const [editedPrice1, setEditedPrice1] = useState(price1);
    const [editedPrice2, setEditedPrice2] = useState(price2);
    const [editedPrice3, setEditedPrice3] = useState(price3);
    const [editedDecision, setEditedDecision] = useState(decision);

    const handleEditStore = () => {
      setIsEditing(true);
    };

    const handleSaveStore = () => {
      // Update the store details based on the edited values
      // You can perform any necessary validations or API calls here
      // For demonstration purposes, we are simply updating the state directly

      // Create a copy of the store details array
      const updatedStoreDetails = [...StoreDetail];

      // Find the index of the store item to be edited
      const storeIndex = updatedStoreDetails.findIndex((store) => store.sl === sl);

      if (storeIndex !== -1) {
        // Update the product name, category, prices, and decision
        updatedStoreDetails[storeIndex].ProName = editedProName;
        updatedStoreDetails[storeIndex].Category = editedCategory;
        updatedStoreDetails[storeIndex].price1 = editedPrice1;
        updatedStoreDetails[storeIndex].price2 = editedPrice2;
        updatedStoreDetails[storeIndex].price3 = editedPrice3;
        updatedStoreDetails[storeIndex].decision = editedDecision;

        // Update the store details state
        setStoreDetails(updatedStoreDetails);

        // Exit edit mode
        setIsEditing(false);
      }
    };

    const handleRemoveStore = () => {
      const updatedStoreDetails = StoreDetail.filter((store) => store.sl !== sl);
      setStoreDetails(updatedStoreDetails);
    };

    const handleDecisionChange = (event) => {
      // Update the decision value here
    };
    // editing close

    return (
      <tr className='StorePanalDetailsList'>
        <td>{sl}</td>
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedProName}
              onChange={(e) => setEditedProName(e.target.value)}
            />
          ) : (
            ProName
          )}
        </td>
        <td>
          <img
            src={URL.createObjectURL(ProImages)}
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
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
            />
          ) : (
            Category
          )}
        </td>
        {/* <td>
          {isEditing ? (
            <input
              type='text'
              value={editedPrice1}
              onChange={(e) => setEditedPrice1(e.target.value)}
            />
          ) : (
            price1
          )}
        </td> */}
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedPrice2}
              onChange={(e) => setEditedPrice2(e.target.value)}
            />
          ) : (
            price2
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type='text'
              value={editedPrice3}
              onChange={(e) => setEditedPrice3(e.target.value)}
            />
          ) : (
            price3
          )}
        </td>
        <td>
          <select value={decision} onChange={handleDecisionChange} id='decisionRecharge'>
            <option value=''>Select an option</option>
            <option value='Subadmin'>Sub Admin</option>
            <option value='countyadmin'>Country Admin</option>
            <option value='helper'>Helper</option>
            <option value='Superuser'>Super User</option>
          </select>
        </td>
        <td>
          <div className='columnComn'>
            {isEditing ? (
              <button className='actionButton' onClick={handleSaveStore}>
                Save
              </button>
            ) : (
              <>
                <button className='actionButton' onClick={handleEditStore}>
                  Edit
                </button>
                <button className='actionButton' onClick={handleRemoveStore}>
                  Remove
                </button>
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  const ITEMS_PER_PAGE = 3; // Number of items to display per page

  const [currentStorePage, setCurrentStorePage] = useState(1);

  // Calculate the index range of items to display based on the current page
  const startIndex = (currentStorePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the current page's data
  const currentPageData = StoreDetail.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(StoreDetail.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentStorePage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentStorePage === i ? 'active' : ''}
          id='pageNo'
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const handleNextPage = () => {
    if (currentStorePage < totalPages) {
      setCurrentStorePage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentStorePage > 1) {
      setCurrentStorePage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <div className='StoreListNav'>
          <div id='topTextStore'>
            <span>Store List</span>
            <br />
            <small>500+ Store Already Registered</small>
          </div>
          <div>
            <button id='AddStore1Btn' onClick={() => setIsStoreOpen(true)}>
              Add
            </button>
            {isStoreOpen && (
              <div className='popup'>
                <div className='popUpContainer' style={{ overflow: 'hidden' }}>
                  <h4 style={{ width: '92%', backgroundColor: '#3c99dc', color: 'white', textAlign: 'center', padding: '10px', position: 'relative', margin: '0 auto' }}>Set-Up Store</h4>
                  <form onSubmit={handleFormSubmit}>
                    <div className='Productform'>
                      <label>Product</label>
                      <input type='file' accept='image/*' onChange={(e) => setProImg(e.target.files[0])} />
                    </div>
                    <div className='Nameform'>
                      <label>Name</label>
                      <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='Catform'>
                      <label>Category</label>
                      <select name='' id='' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value='entry'>Entry</option>
                        <option value='frame'>Frame</option>
                        <option value='commentbox'>Comment Box</option>
                        <option value='background'>Background</option>
                      </select>
                    </div>
                    <div className='day1form'>
                      <label>Day</label>
                      <input
                        type='text'
                        placeholder='Day'
                        value={price2}
                        onChange={(e) => setPrice2(e.target.value)}
                      />
                    </div>
                    <div className='day1form'>
                      <label>Coin</label>
                      <input
                        type='text'
                        placeholder='Coin'
                        value={price3}
                        onChange={(e) => setPrice3(e.target.value)}
                      />
                    </div>
                    <div className='twoBtns'>
                      <button onClick={() => setIsStoreOpen(false)} style={{ backgroundColor: '#3c99dc', border: 'none', borderRadius: '5px', color: 'white', padding: '10px' }}>
                        Cancel
                      </button>
                      <button type='submit' style={{ backgroundColor: '#3c99dc', border: 'none', color: 'white', padding: '10px' }}>
                        ADD
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='storePanalDetailsConatiner'>
          <table className='storePanalDetailsList'>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Product</th>
                <th>Category</th>
                <th>Day</th>
                <th>Coins</th>
                <th>Decision</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((Aghori) => (
                <StoreList key={Aghori.sl} {...Aghori} />
              ))}
            </tbody>
          </table>

          <div className='pagination'>
            <button onClick={handlePreviousPage} disabled={currentStorePage === 1} id='pageNo'>
              <BsArrowLeft />
            </button>
            {getPageNumbers()}
            <button onClick={handleNextPage} disabled={currentStorePage === totalPages} id='pageNo'>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
