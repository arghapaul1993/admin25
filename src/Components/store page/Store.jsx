import React, { useState } from 'react';
import './Store.css';
import { FaEdit } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import car1 from './imgg/honda-cbr-150-price 1.png';
import car2 from './imgg/images (1).png';
import car3 from './imgg/images (4).png';
import car4 from './imgg/images (5).png';
import { IoMdArrowDropdown } from 'react-icons/io';
import axios from 'axios';
// import showNotification from '../../helpers/show_notification';
import { useEffect } from 'react';
import showNotification from '../../helpers/show_notification';


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
  const [allStores, setAllStores] = useState()
  const [id, setId] = useState()
  useEffect(() => {
    loadUsers();
  }, [])
  const loadUsers = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/get-all-store`
    )
    if (data && data.success === 'true') {
      console.log(data, "data")

    }
    else {
      console.log(data, "datahjbhkb")
      setAllStores(data.data);
    }


  };
  const StoreList = ({ sl, _id, storeUrl, name, Category, price, actionBy, validity, status }) => {



    // editing

    const [isEditing, setIsEditing] = useState(false);
    const [editedProName, seteditedProName] = useState(name);
    const [editedCategory, seteditedCategory] = useState(Category);
    const [editedprice1, seteditedprice1] = useState(price);
    const [validity1, setValidity1] = useState(validity);
    const [status1, setstatus1] = useState(status);








    const handleEditstore = () => {
      setIsEditing(true);
    };

    const handleSaveStore = () => {
      // Update the gift details based on the edited values
      // You can perform any necessary validations or API calls here
      // For demonstration purposes, we are simply updating the state directly

      // Create a copy of the gift details array
      const updatedStoreDetails = [allStores];

      // Find the index of the gift to be edited
      const storeIndex = updatedStoreDetails.findIndex((store) => store.sl === sl);

      if (storeIndex !== -1) {
        // Update the title and coin of the gift
        updatedStoreDetails[storeIndex].name = editedProName;
        updatedStoreDetails[storeIndex].nategory = editedCategory;
        updatedStoreDetails[storeIndex].price = editedprice1;
        updatedStoreDetails[storeIndex].validity = validity1;
        updatedStoreDetails[storeIndex].status = status;
        // updatedStoreDetails[storeIndex].price3 = editedprice3;

        // Update the gift details state
        setStoreDetails(updatedStoreDetails);

        // Exit edit mode
        setIsEditing(false);
      }
    };
    const handleUpdate = async (id) => {

      console.log("jk");
      // const image = e.target.image.files[0];
      const formData = new FormData();
      formData.append('name', editedProName);
      formData.append('store', proImg);
      formData.append('price', editedprice1);
      formData.append('validity', validity1);
      formData.append('storeId', id);

      // formData.append('createdBy', user._id);



      // Create a new gift object
      try {
        const response = await axios.put(`http://13.233.229.68:8008/admin/update-store`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response);
        if (response.data.status === true) {
          showNotification(response.data.message, "Success");
          loadUsers();
        } else {
          showNotification(response.data.message, "Error");

        }
      } catch (error) {
        console.error(error);
      }

      // Clear form fields


    };

    const handleRemoveStore = () => {
      const updatedStoreDetails = allStores && allStores.filter((store) => store.sl !== sl);
      setStoreDetails(updatedStoreDetails);
    };











    // edting colse 

    return (

      // editing 
      <div className='StorePanalDetailsList'>
        <p className='column' style={{ marginRight: '10px' }}>{sl}</p>
        <p className='columnT' style={{ marginRight: '20px' }}>
          {isEditing ? (
            <input
              type='text'
              value={editedProName}
              onChange={(e) => seteditedProName(e.target.value)}
            />
          ) : (
            name
          )}
        </p>
        <p className='columnComn' style={{ marginRight: 20, marginLeft: 30, position: 'relative', top: 20 }}>
          <img
            src={storeUrl}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </p>

        {/* <p className='column'>
          {isEditing ? (
            <input
              type='text'
              value={editedCategory}
              onChange={(e) => seteditedCategory(e.target.value)}
            />
          ) : (
            Category
          )}
        </p> */}

        {/* <p className='column'>
          {isEditing ? (
            <input
              type='text'
              value={editedprice1}
              onChange={(e) => seteditedprice1(e.target.value)}
            />
          ) : (
            price1
          )}
        </p> */}

        <p className='column' style={{ marginRight: 45, marginLeft: 45 }}>
          {isEditing ? (
            <input
              type='text'
              value={editedprice1}
              onChange={(e) => seteditedprice1(e.target.value)}
            />
          ) : (
            price)}
        </p>

        <p className='column' style={{ marginRight: 50, marginLeft: 35 }}>
          {isEditing ? (
            <input
              type='text'
              value={validity1}
              onChange={(e) => setValidity1(e.target.value)}
            />
          ) : (
            validity
          )}
        </p>
        <p className='column'>
          {isEditing ? (
            <input
              type='text'
              value={status1}
              onChange={(e) => setstatus1(e.target.value)}
            />
          ) : (
            status
          )}
        </p>

        <p className='column' style={{ marginRight: 55, marginLeft: 45 }}>
          {actionBy[0] && actionBy[0].username}
        </p>



        <div className='columnComn' style={{ marginRight: 30, marginLeft: 55 }}>
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
                  <span className='dropdownIcon'><IoMdArrowDropdown /></span>
                </button>
                <div className='dropdownContent' onClick={setId(_id)}>
                  <a href='#' onClick={handleEditstore}>Edit Gift</a>
                  <a href='#' onClick={handleRemoveStore}>Remove Gift</a>
                </div>
              </div>

            </>
          )}
        </div>
      </div>



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
          id="pageNo"
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

  // add form
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [proImg, setProImg] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [action, setAction] = useState('');
  const [decision, setDecision] = useState('')
  const [storeDetails, setStoreDetails] = useState([...StoreDetail]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create a new store item with the form input values
    const newStoreItem = {
      sl: (storeDetails.length + 1).toString(),
      ProImages: proImg,
      ProName: name,
      Category: category,
      price1: price1,
      price2: price2,
      price3: price3,
      createdBy: localStorage.getItem('user'),      //decision,
      action: <FaEdit />,


    };
    const formData = new FormData();

    formData.append('store', proImg);
    formData.append('name', name);
    formData.append('coin', price3);
    formData.append('category', category);
    formData.append('validity', price2);
    formData.append('createdBy', localStorage.getItem('userId'));
    console.log(newStoreItem)

    try {
      const response = await axios.post(`http://13.233.229.68:8008/admin/add-store`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.status);
      // if (response.data.status === true) {
      //   // showNotification(response.data.message, "Success");
      loadUsers();
      //   loadUsers();
      //   setIsStoreOpen(!isStoreOpen);
      //   setProImg('')
      //   setName('');
      //   setStatus('')
      //   setPrice('');
      //   setValidity('');


      // } else {
      //   showNotification(response.data.message, "Error");

      // }
    } catch (error) {
      console.error(error);
    }

    // Add the new store item to the storeDetails array
    setStoreDetails([...storeDetails, newStoreItem]);

    // Reset form values
    setProImg(null);
    setName('');
    setCategory('');
    setPrice2('');
    setPrice1('');
    setPrice2('');
    setPrice3('');

    setIsStoreOpen(false);
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <div className="StoreListNav" style={{ padding: 40 }}>
          <div id='topTextStore'>
            <h1>Store List</h1>
            <h4>500+ Store Already Registered</h4>
          </div>

          <div > <span style={{ marginRight: 50 }}><span id='seachh' > <input type="search" placeholder='&#x1F50D; Search' /></span></span>

            <button id="AddStore1Btn" onClick={() => setIsStoreOpen(true)}>
              Add
            </button>
          </div>
          <div>

            {isStoreOpen && (
              <div className="popup">
                <div className="popUpContainer" style={{ overflow: 'hidden' }} >
                  <h4 style={{ width: "92%", backgroundColor: '#3c99dc', color: 'white', textAlign: 'center', padding: '10px', position: 'relative', margin: '0 auto' }}>Set-Up Store</h4>


                  <form onSubmit={handleFormSubmit}>
                    <div className="Productform">
                      <label>Product</label>
                      <input type="file" accept="image/*" onChange={(e) => setProImg(e.target.files[0])} />
                    </div>

                    <div className="Nameform">
                      <label>Name</label>
                      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="Catform">
                      <label>Category</label>
                      <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="entry">Entry</option>
                        <option value="frame">Frame</option>
                        <option value="commentbox">Comment Box</option>
                        <option value="background">Background</option>
                      </select>
                    </div>



                    <div className="day1form">
                      <label> Day </label>
                      <input
                        type="text"
                        placeholder="Day"
                        value={price2}
                        onChange={(e) => setPrice2(e.target.value)}
                      />
                    </div>

                    <div className="day1form">
                      <label>Coin</label>
                      <input
                        type="text"
                        placeholder="Coin"
                        value={price3}
                        onChange={(e) => setPrice3(e.target.value)}
                      />
                    </div>



                    <div className='twoBtns'>
                      <button
                        onClick={() => setIsStoreOpen(false)}
                        style={{
                          backgroundColor: '#rgb(255, 87, 34)',
                          border: 'none',
                          borderRadius: '5px',
                          color: 'white',
                          padding: '10px'
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
                          padding: '10px'
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
        </div>

        <div className="storePanalDetailsConatiner">
          <table className='storePanalDetailsList1'>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
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
          <div>
            {allStores && allStores.map((Aghori) => (
              <StoreList key={Aghori.sl} {...Aghori} />
            ))}
          </div>

          <div>
            {currentPageData.map((Aghori) => (
              <StoreList key={Aghori.sl} {...Aghori} />
            ))}
          </div>

          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentStorePage === 1} id="pageNo">
              <BsArrowLeft />
            </button>
            {getPageNumbers()}
            <button onClick={handleNextPage} disabled={currentStorePage === totalPages} id="pageNo">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;