import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Admin from './Admin'
import User from './user/User';
import SideBoard from './sideNav/SideBoard';
import Store from './store page/Store';
import Gift from './Gift page/Gift';
import Salary from './Salary page/Salary';
import Recharge from './recharge Page/Recharge';
import Login from './login signup/Login';
import AdminSub from './main admin/AdminSub';
import Ads from './ads/Ads';
import Ban from './ban/Ban';
import Banner from './banner/Banner';
import Sticker from './sticker/Sticker';
import Level from './level/Level';
import Reward from './reward page/Reward';


const AllRouters = () => {
  return (
    <>
    <div className='routeFlex'  style={{display:'flex'}}> 
    <div>
         {localStorage.getItem('isLogin') == 'true' && <SideBoard/>}
          </div>
        <div>
            <Routes>
                <Route path='/Admins' element={<Admin/>} />
                <Route path='/user' element={<User/>} />
                <Route path='/store' element={<Store/>} />
                <Route path='/gift' element={<Gift/>} />
                <Route path='/salary' element={<Salary/>} />
                <Route path='/ban' element={<Ban/>} />
                <Route path='/banner' element={<Banner/>} />
                <Route path='/sticker' element={<Sticker/>} />
                <Route path='/level' element={<Level/>} />
                <Route path='/ads' element={<Ads/>} />
                <Route path='/reward' element={<Reward/>} />




                <Route path='/recharge' element={<Recharge/>} />
                <Route path='/' element={<Login/>} />
                <Route path='/subAdmin' element={<AdminSub/>} />


             </Routes>
      </div>
    
        </div>
    
    </>
  )
}

export default AllRouters