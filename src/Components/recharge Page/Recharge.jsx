import React, { useState } from 'react';
import './recharge.css';
import imgg1 from '../Salary page/img/fdgdfgdf.png';
import imgg2 from '../Salary page/img/info-user-profile-account-hearing-login-avatar-user-interface-icon-design-conversation-user-thumbnail.png';
import { useEffect } from 'react';
import axios from 'axios';
import showNotification from '../../helpers/show_notification';


const Recharge = () => {


  const [rechargeOpen, setRecharegeOpen] = useState(false)
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    loadRecharge();
  }, [])

  const [id, setid] = useState('')
  const [coin, setcoin] = useState('')

  const [allRecharge, setAllRecharge] = useState()
  const [salaryOpen, setSalaryOpen] = useState(false);

  const loadRecharge = async () => {

    const { data } = await axios.get(`http://13.233.229.68:8008/admin/getRechargeHistory`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (data.success === 'true') {
      console.log(data.data, "data")
      setAllRecharge(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")
      setAllRecharge(data.data);
    }


  };

  const SalaryDetails = [
    {
      Sr: '01',
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
      Sr: '02',
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
      action: 'Undo',
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
      action: 'Undo',
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
  const [coinClear, setcoinclear] = useState()
  console.log(salaryOpen);
  console.log(coinClear, "coinAdded");
  const SalaryList = ({ _id, actionBy, image, name, usrId, createdAt, coinAdded }) => {
    return (
      <tr className='SalaryList'>
        {/* <p>{_id}</p> */}
        <p><img src={image} alt="" height={'50px'} width={'45px'} style={{ borderRadius: '50%' }} /></p>
        <p>{name}</p>
        <p>{usrId}</p>
        <p>{coinAdded}</p>
        <p>{createdAt}</p>
        <p>  {actionBy[0] && actionBy[0].username}</p>
        {/* <p>{price}</p>
        <p>{Coin}</p> */}
        {/* <p>{DateTime}</p> */}
        <div onClick={() => {
          setcoinclear(coinAdded)
        }

        }>
          <button className='rechargeBtn' onClick={() => {
            setSalaryOpen(true)

          }


          }>
            Clear
          </button>
        </div>

      </tr>
    )

  }



  const handleFormSubmit = async (e) => {

    console.log("ghjgh");
    e.preventDefault();

    const response = await axios.post(`http://13.233.229.68:8008admin/recharge`, { userId: id, coin: coin }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );
    console.log(response.data);
    if (response.data.status == true) {
      showNotification(response.data.message, "Success");
      loadRecharge();
    } else {
      showNotification(response.data.message, "Error");


    }
    setid('');
    setcoin('');
    setRecharegeOpen(!rechargeOpen);
  }


  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };





  return (
    <>
      <div className='rechargeConatanier'>

        <div className='topRechargeDivFlex'>
          <div><h3>Send Coins</h3></div>
          <div style={{ display: 'flex' }}>
            <p>Home</p>
            <p>&gt;</p>
            <p>Send Coins</p>
          </div>
        </div>

        {
          salaryOpen && (
            <div className='salFormPopUp'>
              <div className='salAghoriPopConatiner'>
                <form >

                  <h3 id='saalryHaed'>Salary</h3>


                  <div>
                    <select value={selectedOption} onChange={handleOptionChange} id='selectSalary'>
                      <option value="">Select an option</option>
                      <option value="clearAll">Clear All</option>
                      <option value="ClearManual">Clear Manually </option>
                    </select>

                    {selectedOption === 'clearAll' && (
                      <div>
                        {/* <div className='labalDiv' >
                          <label>User ID*</label><br />
                          <input type="text" placeholder="User ID" />
                        </div> */}


                      </div>
                    )}

                    {selectedOption === 'ClearManual' && (
                      <div>
                        {/* 
                        <div className='labalDiv' >
                          <label>User ID*</label><br />
                          <input type="text" placeholder="User ID" />
                        </div> */}

                        <div className='labalDiv'>
                          <label>Coins*</label><br />
                          <input type="number" placeholder="Enter Coins" value={coinClear} onChange={(e) => setcoinclear(e.target.value)} />
                        </div>

                      </div>
                    )}
                  </div>

                  <div className='salBtn'>
                    <button style={{ backgroundColor: 'rgb(255, 87, 34)' }} type='reset' id='myBtnsal' onClick={() => setSalaryOpen(false)} >Cancel</button>
                    <button style={{ backgroundColor: '#1DA1F2' }} type='submit' id='myBtnsal2' onClick={handleFormSubmit} >Clear Coins</button>
                  </div>
                </form>
              </div>
            </div>



          )
        }

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
            <button className='rechargeBtn' onClick={() => setRecharegeOpen(true)}>
              Recharge
            </button>
            {rechargeOpen && (
              <div className='rechageFormPopUp'>
                <div className='rechargeAghoriPopConatiner'>
                  <h4 id='RechargeHeader'>Recharge</h4>
                  <form onSubmit={handleFormSubmit}>


                    <div>
                      <select value={selectedOption} onChange={handleOptionChange} id='rechareSelect'>
                        <option value="">Select an option</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>

                      {selectedOption === 'admin' && (
                        <div>
                          <select id='rechareSelect'>
                            <option value="">Select an option</option>
                            <option value="Subadmin">Sub Admin</option>
                            <option value="countyadmin">Country Admin</option>
                            <option value="helper">Helper</option>
                            <option value="Superuser">Super User</option>
                          </select>


                          <div>
                            <label>Coins*</label><br />
                            <input type="number" placeholder="Enter Coins" onChange={(e) => setcoin(e.target.value)} />
                          </div>


                        </div>
                      )}

                      {selectedOption === 'user' && (
                        <div>

                          <div >
                            <label>User ID*</label><br />
                            <input type="text" placeholder="User ID" name="id" onChange={(e) => setid(e.target.value)} />
                          </div>

                          <div>
                            <label>Coins*</label><br />
                            <input type="number" placeholder="Enter Coins" name="coin" onChange={(e) => setcoin(e.target.value)} />
                          </div>

                        </div>
                      )}
                    </div>

                    <div className='salBtn'>
                      <button type='reset' onClick={() => setRecharegeOpen(false)} style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '5px' }}>Cancel</button>
                      <button type='submit' onClick={handleFormSubmit} style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '5px' }}>Send Coins</button>
                    </div>
                  </form>
                </div>
              </div>



            )}</div>

        </div>



        <div className='salaryHeadingg' style={{ width: 1400 }}>
          <p>Sr</p>
          <p style={{ position: 'relative', left: "1%" }}>Image</p>
          <p style={{ position: 'relative', left: "1%" }}>Username</p>
          <p style={{ position: 'relative', left: "2%" }}>user id</p>
          <p style={{ position: 'relative', left: "1%" }}>recharge amout</p>
          {/* <p style={{ position: 'relative', left: "2%" }}>Payment</p> */}
          {/* <p>Price</p>
                <p>Coin</p> */}
          <p style={{ position: 'relative', left: "2%" }}>Date</p>
          <p style={{ position: 'relative', left: "2%" }}>Decision</p>
          <p style={{ position: 'relative', left: "2%" }}>Action</p>


        </div>


        <div className='salaryListDivFlax'>
          {allRecharge && allRecharge.map(aghori => (
            <SalaryList key={aghori.Sr} {...aghori} />
          ))}

        </div>


      </div>





    </>
  )
}

export default Recharge