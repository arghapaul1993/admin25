import React, { useState } from 'react';
import './user.css';

import userPic from '../Nav/piccc/aghori.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const [showOptions, setShowOptions] = useState(false);
  const userId = localStorage.getItem("userId");
  const [form, setForm] = useState('');
  const [formDevice, setFormDevice] = useState('');
  const [active, setActive] = useState('All');
  const [selectedValue, setSelectedValue] = useState('helper');

  const [filter, setFilter] = useState("All");
  const [allUsers, setAllUsers] = useState()
  const nevigate = useNavigate()
  const token = localStorage.getItem("userToken");
  console.log(token, "token");
  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/getAllUser`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.success.toString() == 'true') {
      console.log(data.data, "data")
      setAllUsers(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
    }









  };
  const handleBan = async (set) => {

    let data = [set]

    // Create a new gift object
    try {
      const response = await axios.put(`http://13.233.229.68:8008/user/update/${data[0].set._id}`,
        data[0].set.isBlocked === true ? { isBlocked: false } : { isBlocked: true }
      );
      console.log(response?.data?.success);

      if (response?.data?.success) {
        showNotification(response?.data?.message, "Success");

        loadUsers();
      } else {
        showNotification("Error", "Error");
        loadUsers();
      }
    } catch (error) {
      console.error(error);
    }

    // Clear form fields


  };


  const handleShowOptions = () => {
    setShowOptions(true);
  };

  const handleDecisionChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const UserDetail = [
    {
      sl: '01',
      images: userPic,
      userId: '@argha',

      phnNo: 9876543210,
      statuses: 'ban',
      country: 'India',
      info: 'Show Deatils',
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
      ),


    },

    {

      sl: '02',
      images: userPic,
      userId: '@aghori',
      phnNo: 9876543210,
      statuses: 'Deactive',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '03',
      images: userPic,
      userId: '@prakash',
      phnNo: 9876543210,
      statuses: 'device ban',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '04',
      images: userPic,
      userId: '@Aman',
      phnNo: 9876543210,
      statuses: 'active',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '05',
      images: userPic,
      userId: '@argha',
      phnNo: 9876543210,
      statuses: 'New Device Ban',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '06',
      images: userPic,
      userId: '@aghori',
      phnNo: 9876543210,
      statuses: 'Device Ban',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '07',
      images: userPic,
      userId: '@prakash',
      phnNo: 9876543210,
      statuses: 'Ban',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '08',
      images: userPic,
      userId: '@Aman',
      phnNo: 9876543210,
      statuses: 'New User',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '09',
      images: userPic,
      userId: '@Naga Shadhu',
      phnNo: 9876543210,
      statuses: 'Deactive',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
    {
      sl: '10',
      images: userPic,
      userId: '@Kapalika',
      phnNo: 9876543210,
      statuses: 'active',
      country: 'India',
      info: 'Show Deatils',
      decision: (
        <select
          value={selectedValue}
          onChange={handleDecisionChange}
          id='decisionRecharge'
        >
          <option value=''>Select an option</option>
          <option value='Subadmin'>Sub Admin</option>
          <option value='countyadmin'>Country Admin</option>
          <option value='helper'>Helper</option>
          <option value='Superuser'>Super User</option>
        </select>
      ),

    },
  ];


  const activeUsers = allUsers && allUsers.filter((user) => {
    console.log(active.toString())
    if (active.toString() === 'all') {
      return user
    } else if (active.toString() === 'active') {
      return user.isBlocked === false;
    } else {
      return user.isBlocked === true;;
    }
  });
  let activeUser = allUsers && allUsers.filter((i) => {
    return i.isBlocked == false
  })
  let deactiveUser = allUsers && allUsers.filter((i) => {
    return i.isBlocked !== false
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleCancel = () => {
    setForm('');
    setFormDevice('')
  };

  const handleGift = () => {
    setForm('Active');
  };
  const handleGiftDevice = () => {
    setFormDevice('Active');
  };




  const UserList = ({ _id, sl, name, photo, id, mobile, isBlocked, email, actionBy }) => {
    return (
      <tr className='userRow'>
        <td>{sl}</td>
        <td>
          <img
            src={photo}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </td>
        <td>{name}</td>
        <td>{id}</td>
        <td>{mobile}</td>
        <td>{isBlocked === false ? "Active" : "Blocked"}</td>
        <td>{email}</td>
        <td>
          <div className='columnComn'>
            <button className='actionButton'>
              Action
              <span className='dropdownIcon'><IoMdArrowDropdown /></span>
            </button>
            <div className='dropdownContent'>
              {
                isBlocked === false ?
                  <div>
                    <button onClick={() => {

                      handleBan({
                        set: {
                          isBlocked,
                          _id
                        }
                      });
                    }}>Active</button>
                  </div>

                  :
                  <div>
                    <button onClick={() => {

                      handleBan({
                        set: {
                          isBlocked,
                          _id
                        }
                      });
                    }}>Deactive</button>    </div>
              }

              {/* 
              <button>Device Ban</button> */}
            </div>
          </div>
        </td>


      </tr>
    );
  };

  const ITEMS_PER_PAGE = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  // Get the current page's data
  const currentPageData = allUsers && allUsers.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allUsers && allUsers.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? 'active' : ''}
          id='pageNo'
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  const handleActive = (e) => {
    const name = e.target.getAttribute('name');
    if (name.toString() == "all") {
      setActive('all');
      console.log(active);
    } else {
      name.toString() == "active" ? setActive('active') : setActive('deactive')
      console.log(active)
    };
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handleBan1 = () => {
    nevigate('/ban')
  }
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className='mainUserContainer'>
        <div>
          <div className='mainUser'>
            <div className='panelDivBoard'>
              <div>
                <p id='userBordData'>{activeUser && activeUser.length}</p>
                <p id='userBoardCaption'>Active User</p>
              </div>
              <div></div>
            </div>
            <div className='panelDivBoard'>
              <div>
                <p id='userBordData'>{deactiveUser && deactiveUser.length}</p>
                <p id='userBoardCaption'>Deactive Last Month</p>
              </div>
              <div></div>
            </div>
            <div className='panelDivBoard'>
              <div>
                <p id='userBordData'>{deactiveUser && deactiveUser.length}</p>
                <p id='userBoardCaption'>Ban User</p>
              </div>
              <div></div>
            </div>
            <div className='panelDivBoard'>
              <div>
                <p id='userBordData'>{allUsers && allUsers.length}</p>
                <p id='userBoardCaption'>All User</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className='userPanalDetails'>
            <div className='userPanalDetailsHeading'>
              <div className='PanalDetailsLinks' >
                <span name='all' onClick={handleActive} style={{ color: 'blue' }}>All</span>
                <span name='active' onClick={handleActive}>Active</span>
                <span name='deactive' onClick={handleActive}>Deactive</span>
                {/* <span >New User</span> */}
                <span onClick={handleBan1}>Ban</span>
              </div>
              <div className='PanalDetailsSearch'>
                <input type='search' placeholder='Search' />
              </div>
            </div>
            <div className='userPanalDetailsConatiner'>
              <table className='userPanalDetailsList'>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Phone Number</th>
                    <th>Statuses</th>
                    <th>Email</th>
                    <th>Action</th>
                    {/* <th>Decision</th> */}
                  </tr>
                </thead>
                <tbody>
                  {activeUsers && activeUsers.map((theAghori) => (
                    <UserList key={theAghori.sl} {...theAghori} />
                  ))}


                </tbody>
              </table>
              <div className='pagination'>
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  id='pageNo'
                >
                  <BsArrowLeft />
                </button>
                {getPageNumbers()}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  id='pageNo'
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
