import React, { useEffect, useState } from 'react';

import './Salary.css';

import imgg1 from './img/fdgdfgdf.png';
import imgg2 from './img/info-user-profile-account-hearing-login-avatar-user-interface-icon-design-conversation-user-thumbnail.png';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';

const Salary = () => {
  const token = localStorage.getItem("userToken");
  const item = localStorage.getItem("user")
  const user = JSON.parse(item)
  // console.log(token, "token");
  useEffect(() => {
    loadUsers();
  }, [])
  const [allUsers, setAllUsers] = useState()
  const [salaryOpen1, setSalaryOpen1] = useState(false);
  const [coinClear, setcoinclear] = useState()
  const [percent, setpercent] = useState()
  const [id, setId] = useState('')
  const loadUsers = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/get-salary-history`,
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

  const SalaryDetails = [

    {
      Sr: '01',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'yes',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Clear',
    },

    {
      Sr: '02',
      Image: imgg2,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'no',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Clear',
    },

    {
      Sr: '03',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },


    {
      Sr: '04',
      Image: imgg2,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },


    {
      Sr: '05',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '06',
      Image: imgg2,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '07',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '08',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '09',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '10',
      Image: imgg2,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },

    {
      Sr: '11',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'clear',
    },

    {
      Sr: '12',
      Image: imgg1,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'claer',
    },

    {
      Sr: '13',
      Image: imgg2,
      Username: '@Aghori',
      Sender: '@Aman',
      Name: 'Aghori',
      PaymentId: 'jgjdgfjahh',
      price: 122,
      Coin: 3543543,
      DateTime: '23-02-31',
      action: 'Undo',
    },
  ]


  const SalaryList = ({ Sr, Image, Username, user_info, Name, user_id, createdAt, actionBy, cleared_salary, Coin, percentage, DateTime, action, decision }) => {
    const handlePaymentChange = (event) => {
      // Update the PaymentId value here
    };

    return (
      <div className='SalaryList'>
        <p style={{ width: 25 }}>{Sr}</p>
        <p style={{ width: 80 }}><img src={user_info[0].image} alt="" height={'50px'} width={'45px'} style={{ borderRadius: '50%' }} /></p>
        {/* <p style={{width:80}}> {user_info[0].name}</p> */}
        {/* <p style={{ width: 80 }}>{createdBy}</p> */}
        <p style={{ width: 50 }}>{user_info[0].name}</p>
        <p style={{ width: 50 }}>{cleared_salary}</p>
        {/* <p >{percentage}%</p> */}
        {/* <select style={{width:80, position:'relative', left: 20}} value={PaymentId} onChange={handlePaymentChange} id='selectPaymenyy'>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}
        {/* <p>{price}</p>
        <p>{Coin}</p> */}
        {/* <p style={{ width: 110 }}>{createdAt}</p> */}
        <p style={{ width: 110 }}>  {actionBy[0] && actionBy[0].username}</p>
        {/* <div onClick={() => {
          setcoinclear(cleared_salary)
          setId(user_id)
          setpercent(percentage);
        }

        }>
          <button className='rechargeBtn' onClick={() => {
            setSalaryOpen1(true)

          }


          }>
            Clear
          </button>
        </div> */}

        {/* <select style={{ width: 70 }} value={decision} name="" id="decisionRecharge">
          <option value="Subadmin">Sub Admin</option>
          <option value="countyadmin">Country Admin</option>
          <option value="helper">Helper</option>
          <option value="Superuser">Super User</option>
        </select> */}

      </div>
    )

  }
  console.log(id, "id");

  const [salaryOpen, setSalaryOpen] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleClearSubmit = async (e) => {

    console.log("ghjgh");
    e.preventDefault();

    const response = await axios.post(`http://13.233.229.68:8008/admin/clear-salary`, {
      userId: id,
      salary: Number(coinClear),
      createdBy: user._id,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );
    console.log(response.data);
    if (response.data.success === true) {
      showNotification(response.data.message, "Success");
      loadUsers();
    } else {
      showNotification(response.data.message, "Error");


    }

    setId("");
    setcoinclear("");
    setSalaryOpen1(!salaryOpen1);
  }
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };


  return (
    <>

      <div className='salaryContanier'>
        <div>
          <h3>Earning Coin Clear</h3>


          <div className='salaryDivtop'>
            <div className='salaryDivinner1'>
              <p>ID Number</p>
              <p>Country</p>
              <p>Clear</p>
              <p>Time</p>
              <p>History</p>
            </div>
            <div>
              <input type="search" name="Search" id="" placeholder='&#128269; Search' height={'50px'} />
            </div>
          </div>

        </div>




        <div className='lowerFirstDiv'>
          <div>
            <h3>Salary History</h3>
          </div>

          <div style={{ display: "flex" }}>
            <p>Home</p>
            <p>&gt;</p>
            <p> Salary History</p>
          </div>

        </div>


        <div className='lowerSecondDiv'>

          <div>
            <label>Search</label>
            <input type="text" name="" id="" />
          </div>

          <div>
            <label>Start Date</label>
            <input type="date" name="" id="" />
          </div>

          <div>
            <label>End Date</label>
            <input type="date" name="" id="" />
          </div>
          <div>
            <button className='rechargeBtn' onClick={() => setSalaryOpen1(true)}>
              Salary
            </button>



            {/* 
            {salaryOpen && (
              <div className='salFormPopUp'>
                <div className='salAghoriPopConatiner'>
                  <form onSubmit={handleFormSubmit}>

                    <h3 id='saalryHaed'>Salary</h3>


                    <div>
                      <select value={selectedOption} onChange={handleOptionChange} id='selectSalary'>
                        <option value="">Select an option</option>
                        <option value="clearAll">Clear All</option>
                        <option value="ClearManual">Clear Manually </option>
                      </select>

                      {selectedOption === 'clearAll' && (
                        <div>
                          <div className='labalDiv' >
                            <label>User ID*</label><br />
                            <input type="text" placeholder="User ID" />
                          </div>


                        </div>
                      )}

                      {selectedOption === 'ClearManual' && (
                        <div>

                          <div className='labalDiv' >
                            <label>User ID*</label><br />
                            <input type="text" placeholder="User ID" />
                          </div>

                          <div className='labalDiv'>
                            <label>Coins*</label><br />
                            <input type="number" placeholder="Enter Coins" />
                          </div>

                        </div>
                      )}
                    </div>

                    <div className='salBtn'>
                      <button style={{ backgroundColor: 'rgb(255, 87, 34)' }} type='reset' id='myBtnsal' onClick={() => setSalaryOpen(false)} >Cancel</button>
                      <button style={{ backgroundColor: '#1DA1F2' }} type='submit' id='myBtnsal2' onClick={handleFormSubmit} >Clear Salary</button>
                    </div>
                  </form>
                </div>
              </div>



            )} */}


            {
              salaryOpen1 && (
                <div className='salFormPopUp'>
                  <div className='salAghoriPopConatiner'>
                    <form >

                      <h3 id='saalryHaed'>Salary</h3>


                      <div>





                        <div>
                          <div className='labalDiv'>
                            <label>User id</label><br />
                            <input type="text" placeholder="Enter Coins" value={id} onChange={(e) => setId(e.target.value)} />
                          </div>

                          <div className='labalDiv'>
                            <label>Clear Salary</label><br />
                            <input type="text" placeholder="Enter Salary" value={coinClear} onChange={(e) => setcoinclear(e.target.value)} />
                          </div>



                        </div>

                      </div>

                      <div className='salBtn'>
                        <button style={{ backgroundColor: 'rgb(255, 87, 34)' }} type='reset' id='myBtnsal' onClick={() => setSalaryOpen1(false)} >Cancel</button>
                        <button style={{ backgroundColor: '#1DA1F2' }} type='submit' id='myBtnsal2' onClick={handleClearSubmit} >Clear Salary</button>
                      </div>
                    </form>
                  </div>
                </div>



              )
            }






          </div>

        </div>





        <div className='salaryHeadingg'>
          <p>Sr</p>
          <p>Image</p>
          {/* <p>Username</p> */}
          {/* <p>Sender</p> */}
          <p>Name</p>
          <p>Cleared Salary</p>
          {/* <p>Percentage</p> */}
          {/* <p>DateTime</p> */}

          <p>Decision</p>
          {/* <p>Clear</p> */}
        </div>


        <div className='salaryListDivFlax'>
          {allUsers && allUsers.map(aghori => (
            <SalaryList key={aghori.Sr} {...aghori} />
          ))}

        </div>


      </div>

    </>
  )
}

export default Salary