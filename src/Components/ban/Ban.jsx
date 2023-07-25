import React, { useState } from 'react';
import './ban.css';
import '../Gift page/Gift.css';
import { useNavigate } from 'react-router-dom';
import userPic from '../Nav/piccc/aghori.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SideBoard from '../sideNav/SideBoard';
import { IoMdArrowDropdown } from 'react-icons/io';
import showNotification from './../../helpers/show_notification';
import axios from 'axios';
import { useEffect } from 'react';

const User = () => {
  const [active, setActive] = useState('all');
  const [selectedValue, setSelectedValue] = useState('helper');
  const [salaryOpen, setSalaryOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  // console.log(token, "token");
  useEffect(() => {
    loadUsers();
  }, [])
  useEffect(() => {
    loadUser();
  }, [active.toString() === 'all'])

  const [allUsers, setAllUsers] = useState()
  const [users, setUsers] = useState()
  const [id, setId] = useState()
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const loadUsers = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/user/getBannedUsers`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.data) {
      console.log(data.data, "data")
      setAllUsers(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
    }


  };
  const loadUser = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/getAllUser`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.data) {
      console.log(data.data, "data")
      setUsers(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
    }


  };

  const handleBan = async (e) => {
    e.preventDefault();
    // let data = [set]

    // Create a new gift object
    try {
      const response = await axios.post(`http://13.233.229.68:8008user/ban`,
        selectedOption === "isPermenentBan" ?
          {
            userId: id,
            period: 1,
            createdBy: user._id,
            isPermenentBan: true

          } : {
            userId: id,
            period: Number(selectedOption),
            createdBy: user._id,
            isPermenentBan: false

          }
        // data[0].set.isBlocked === true ? { isBlocked: false } : { isBlocked: true }
      );
      console.log(response && response?.data?.data);

      if (response?.data?.data) {
        showNotification(response?.data?.message, "Success");

        loadUsers();
        setSalaryOpen(false)
        setSelectedOption('');
      } else {
        showNotification("Error", "Error");
        loadUsers();
      }
    } catch (error) {
      console.error(error);
    }

    // Clear form fields


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
      info: 'Show Details'



    },
    {
      sl: '02',
      images: userPic,
      userId: '@aghori',
      phnNo: 9876543210,
      statuses: 'Device Ban',
      country: 'India',
      info: 'Show Details',

    },
    // Rest of the user data objects
  ];

  const handleActive = (e) => {
    const name = e.target.getAttribute('name');
    setActive(name);
  };

  // const handleBan = () => {
  //   navigate('/ban');
  // };

  const UserList = ({ _id, user_info, sl, name, userId, createdBy, actionBy, photo, id, mobile, isBlocked, email, }) => {
    return (
      <tr className='userRow'>
        <td>{sl}</td>
        <td>
          <img
            src={user_info[0].photo}
            alt=''
            height={'50px'}
            width={'50px'}
            style={{ borderRadius: '50%' }}
          />
        </td>
        <td>{user_info[0].name}</td>
        <td>{userId}</td>
        <td>{user_info[0].mobile}</td>
        {/* <td>{isBlocked === false ? "Active" : "Blocked"}</td> */}
        <td>{user_info[0].email}</td>
        <td>
          <div className='columnComn'>
            <button className='actionButton'>
              Action
              <span className='dropdownIcon'><IoMdArrowDropdown /></span>
            </button>
            <div onClick={() => {
              setId(_id);

            }} className='dropdownContent'>
              {/* {
                isBlocked === false ?
                  <div>
                    <button onClick={() => {
                      setSalaryOpen(true)
                      // handleBan({
                      //   set: {
                      //     isBlocked,
                      //     _id
                      //   }
                      // });
                    }}>Ban</button><br />
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
                    }}>Unban</button>    </div>
              } */}


              <button >Device Ban</button>
            </div>
          </div>
        </td>
        <td>  {actionBy[0] && actionBy[0].username}</td>

      </tr>
    );
  };
  const UserList1 = ({ _id, sl, name, photo, id, mobile, isBlocked, createdBy, email, }) => {
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
        <td>{_id}</td>
        <td>{mobile}</td>
        {/* <td>{isBlocked === false ? "Active" : "Blocked"}</td> */}
        <td>{email}</td>
        <td>
          <div className='columnComn'>
            <button className='actionButton'>
              Action
              <span className='dropdownIcon'><IoMdArrowDropdown /></span>
            </button>
            <div onClick={() => {
              setId(_id);

            }} className='dropdownContent'>
              {
                isBlocked === false ?
                  <div>
                    <button onClick={() => {
                      setSalaryOpen(true)
                      // handleBan({
                      //   set: {
                      //     isBlocked,
                      //     _id
                      //   }
                      // });
                    }}>Ban</button><br />
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
                    }}>Unban</button>    </div>
              }


              <button >Device Ban</button>
            </div>
          </div>
        </td>


      </tr>
    );
  };

  const ITEMS_PER_PAGE = 3; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range of items to display based on the current page
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

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const BanUsers = allUsers && allUsers.filter((user) => {
    // console.log(active.toString())
    if (active.toString() === 'ban') {
      return user
    }
    else if (active.toString() === 'deviceBan') {
      return 0;
    }
    else if (active.toString() === 'permenentban') {
      return user.isPermenentBan === true;
    }
    else {
      return true;
    }
  });
  const Users = users && users.filter((user) => {
    // console.log(active.toString())
    if (active.toString() === 'all') {
      return user
    }
    else if (active.toString() === 'deviceBan') {
      return 0;
    }
    else {
      return true;
    }
  });


  // const currentPages = currentPageData.filter((user) => {
  //   if (active.toString() === 'ban') {
  //     return user.statuses === 'ban';
  //   } else if (active.toString() === 'Device Ban') {
  //     return user.statuses === 'Device Ban';
  //   } else {
  //     return true;
  //   }
  // });

  return (
    <>
      <div className='mainUserContainer'>
        <div>
          {/* Rest of the JSX code */}
        </div>
        {
          salaryOpen && (
            <div className='salFormPopUp'>
              <div className='salAghoriPopConatiner'>
                <form >

                  <h3 id='saalryHaed'>Ban</h3>


                  <div>
                    <select value={selectedOption} onChange={handleOptionChange} id='selectSalary'>
                      <option value="">Select an option</option>
                      <option value="7">7 days</option>
                      <option value="15">15 days </option>
                      <option value="30">30 days </option>
                      <option value="isPermenentBan">Permenent Ban</option>
                    </select>


                  </div>

                  <div className='salBtn'>
                    <button style={{ backgroundColor: 'rgb(255, 87, 34)' }} type='reset' id='myBtnsal' onClick={() => setSalaryOpen(false)} >Cancel</button>
                    <button style={{ backgroundColor: '#1DA1F2' }} type='submit' id='myBtnsal2' onClick={handleBan} >Submit</button>
                  </div>
                </form>
              </div>
            </div>



          )
        }
        <div className='userPanalDetails' style={{ width: '1100px' }}>
          <div className='userPanalDetailsHeading'>
            <div className='PanalDetailsLinks'>
              <span
                name='all'
                onClick={handleActive}
                style={{ color: active === 'all' ? 'blue' : '' }}
              >
                All
              </span>
              <span
                name='ban'
                onClick={handleActive}
                style={{ color: active === 'ban' ? 'blue' : '' }}
              >
                Ban
              </span>
              <span
                name='permenentban'
                onClick={handleActive}
                style={{ color: active === 'permenentban' ? 'blue' : '' }}
              >
                Permenent Ban
              </span>
              <span
                name='deviceBan'
                onClick={handleActive}
                style={{ color: active === 'deviceBan' ? 'blue' : '' }}
              >
                Device Ban
              </span>
            </div>
            <div className='PanalDetailsSearch'>
              <input type='search' placeholder='Search' />
            </div>
          </div>
          <div className='userPanalDetailsContainer'>
            <table className='userTable'>
              <thead>
                <tr className='userTableHeader'>
                  <th>Sl</th>
                  <th>Image</th>
                  <th>User</th>
                  <th>User Id</th>
                  <th>Phone Number</th>
                  {/* <th>Statuses</th> */}
                  <th>E mail</th>
                  <th>Action</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                {
                  active !== 'all' && BanUsers && BanUsers.map((theAghori) => (
                    <UserList key={theAghori.sl} {...theAghori} />
                  ))}


                {
                  active === 'all' && Users && Users.map((theAghori) => (
                    <UserList1 key={theAghori.sl} {...theAghori} />
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
    </>
  );
};

export default User;
