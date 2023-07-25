
import React, { useState } from 'react';
import './reward.css';
import { FaEdit } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

 
import { IoMdArrowDropdown } from 'react-icons/io';

const Reward = () => {
  const RewardDetail = [
    {
      sl:1,
      user:'aghori',
      receive:'yes',
      day:5,
      liveTime:'6Hours',
      reward:"Gold",
      hours:'44hours',
            


    },
  ];
  const [isRewardOpen, setIsRewardOpen] = useState(false);

  const [rewardDetails, setRewardDetails] = useState([...RewardDetail]);

  const RewardList = ({ sl, user, receive, day, liveTime, reward, hours,decision }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [editedUser, setEditedUser] = useState(user);
        const [editedReceive, setEditedReceive] = useState(receive);
        const [editedDay, setEditedDay] = useState(day);
        const [editedLiveTime, setEditedLiveTime] = useState(liveTime);
        const [editedReward, setEditedReward] = useState(reward);
        const [editedHours, setEditedHours] = useState(hours);




  
    const handleEditReward = () => {
      setIsEditing(true);
    };
  
    const handleSaveReward = () => {
      // Create a copy of the reward details array
      const updatedRewardDetails = [...rewardDetails];
    
      // Find the index of the reward to be edited
      const rewardIndex = updatedRewardDetails.findIndex((reward) => reward.sl === sl);
    
      if (rewardIndex !== -1) {
        // Update the reward details based on the edited values
        updatedRewardDetails[rewardIndex].user = editedUser;
        updatedRewardDetails[rewardIndex].receive = editedReceive;
        updatedRewardDetails[rewardIndex].day = editedDay;
        updatedRewardDetails[rewardIndex].liveTime = editedLiveTime;
        updatedRewardDetails[rewardIndex].reward = editedReward;
        updatedRewardDetails[rewardIndex].hours = editedHours;
    
        // Update the reward details state
        setRewardDetails(updatedRewardDetails);
    
        // Exit edit mode
        setIsEditing(false);
      }
    };
    
  
    const handleRemoveReward = () => {
      const updatedRewardDetails = rewardDetails.filter((reward) => reward.sl !== sl);
      setRewardDetails(updatedRewardDetails);
    };
  



    // edting colse 

    return (
     
      // editing 
      <div className="myRewardDiv">
             <p className="column" style={{ marginRight: '10px' }}>
               {sl}
               </p>
               <p className="columnT" style={{  position:'relative', right:20 }}>
                 {isEditing ? (
                  <input
                    type="text"
                    value={editedUser}
                    onChange={(e) => setEditedUser(e.target.value)}
                  />
                ) : (
                  user
                )}
              </p>
              <p className="columnT" style={{ position:'relative',right: '65px' }}>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedReceive}
                    onChange={(e) => setEditedReceive(e.target.value)}
                  />
                ) : (
                  receive
                )}
              </p>
              <p className="column" style={{ position:'relative',right: '85px' }}>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedDay}
                    onChange={(e) => setEditedDay(e.target.value)}
                  />
                ) : (
                  day
                )}
              </p>
              <p className="column" style={{ position:'relative',right: '55px' }}>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedLiveTime}
                    onChange={(e) => setEditedLiveTime(e.target.value)}
                  />
                ) : (
                  liveTime
                )}
              </p>
              <p className="column">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedReward}
                    onChange={(e) => setEditedReward(e.target.value)}
                  />
                ) : (
                  reward
                )}
              </p>
              <p className="column" style={{ position:'relative',left: '25px' }}>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedHours}
                    onChange={(e) => setEditedHours(e.target.value)}
                  />
                ) : (
                  hours
                )}
              </p>

              <select style={{ position:'relative',left: '50px', top:-10}} value={decision} id='decisionRecharge'>
        <option value="">Select an option</option>
                      <option value="Subadmin">Sub Admin</option>
                      <option value="countyadmin">Country Admin</option>
                      <option value="helper">Helper</option>
                      <option value="Superuser">Super User</option>
                    </select>  


              <div className="columnComn" style={{position:'relative', right:-10, top:-10}}>
                {isEditing ? (
                  <button className="actionButton" onClick={handleSaveReward}>
                    Save
                  </button>
                ) : (
                  <>
                    <div className="columnComn">
                      <button className="actionButton">
                        <FaEdit/>
                        <span className="dropdownIcon">
                          <IoMdArrowDropdown />
                        </span>
                      </button>
                      <div className="dropdownContent">
                        <a href="#" onClick={handleEditReward}>
                          Edit 
                        </a>
                        <a href="#" onClick={handleRemoveReward}>
                          Remove
                        </a>
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
  const currentPageData = RewardDetail.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(RewardDetail.length / ITEMS_PER_PAGE);

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

      const [editedUsers, setEditedUsers] = useState('');
    const [editedReceives, setEditedReceives] = useState('');
    const [editedDays, setEditedDays] = useState('');
    const [editedLiveTimes, setEditedLiveTimes] = useState('');
    const [editedRewards, setEditedRewards] = useState('');
    const [editedHour, setEditedHour] = useState('');


  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new store item with the form input values
    const newRewardItem = {
      sl: (RewardDetail.length + 1).toString(),
      user: editedUsers,
      receive: editedReceives,
      day: editedDays,
      liveTime: editedLiveTimes,
      reward: editedRewards,
      hours: editedHour,
      action: <FaEdit />,

    };

    // Add the new store item to the storeDetails array
    setRewardDetails([...rewardDetails, newRewardItem]);

    // Reset form values
    setEditedUsers('');
    setEditedReceives('');
    setEditedDays('');
    setEditedLiveTimes('');
    setEditedRewards('');
    setEditedHour('');

    setIsRewardOpen(false);
  };

  return (
    <>
      <div className='RewardConatinerMAim'>
        <div className="RewardListNav">
         
          <div>
            <button id="Addreward1Btn" onClick={() => setIsRewardOpen(true)}>
              Add Rewards
            </button>
            {isRewardOpen && (
              <div className="popupRewad">
                <div className="popUpContainerReward">

                  <h3 className='h3head'>Reward</h3>

                  <form onSubmit={handleFormSubmit}>
                    <div className="user">

                      <label>User</label><br/>
                      <select  onChange={(e) => setEditedUsers(e.target.value)} value={editedUsers} >
                      <option value="All New">All New</option>  
                      <option value="Sender">Sender</option>
                      <option value="Receiver">Receiver</option>                      
                      <option value="Edit">Winner</option>
                      </select>                   
                       </div>

                       <div className="Day">
                      <label>Day</label>
                      <input
                        type="text"
                        placeholder="Day"
                        value={editedDays}
                        onChange={(e) => setEditedDays(e.target.value)}
                      />
                    </div>

                    <div className="LiveTime">
                      <label>Live Time</label>
                      <input
                        type="text"
                        placeholder="Live Time"
                        value={editedLiveTimes}
                        onChange={(e) => setEditedLiveTimes(e.target.value)}
                      />
                    </div>

                    
                    <div className="Reward">
                      <label> Reward</label>
                      <input
                        type="text"
                        placeholder="Reward"
                        value={editedRewards}
                        onChange={(e) => setEditedRewards(e.target.value)}
                      />
                    </div>

    
                    <div className="Hour">
                      <label> Hour</label>
                      <input
                        type="text"
                        placeholder="Hour"
                        value={editedHour}
                        onChange={(e) => setEditedHour(e.target.value)}
                      />
                    </div>

                    <div className="Hour">
                      <label> Receive</label>
                      <input
                        type="text"
                        placeholder="Receive"
                        value={editedReceives}
                        onChange={(e) => setEditedReceives(e.target.value)}
                      />
                    </div>
                          <div className='popOfButtons'>
                          <button style={{ backgroundColor:'rgb(255, 87, 34)' }} onClick={() => setIsRewardOpen(false)} id='rewadBtn'>Cancel</button>

                          <button type="submit" id='rewadBtn'>Add</button>

                            </div>              
                  </form>
                </div>
              </div>
            )}
           
          </div>
        </div>

        <div className="popUpRewardContainer">
                 <div className="RewardPanalDetailsList">
                      <p className="rewardTHeader">Sl.</p>
                      <p className="rewardTHeader">User</p>
                      <p className="rewardTHeader">Recevie</p>
                      <p className="rewardTHeader">Day</p>
                      <p className="rewardTHeader">Live Time</p>
                      <p className="rewardTHeader">Reward</p>
                      <p className="rewardTHeader">Hours</p>
                      <p className="rewardTHeader">Decision</p>
                      <p className="rewardTHeader">Action</p>
              </div>

          <div>
            {rewardDetails.map((Aghori) => (
              <RewardList key={Aghori.sl} {...Aghori} />
            ))}
          </div>

          <div>
            {currentPageData.map((Aghori) => (
              <RewardList key={Aghori.sl} {...Aghori} />
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

export default Reward;
