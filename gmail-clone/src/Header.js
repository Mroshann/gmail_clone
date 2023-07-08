import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

const Header = () => {
        const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut =() =>{
    auth.signOut().then(() =>{
            dispatch(logout())
    })
  }

  return (
    <div className="header">
    <div className="header__left">
      <IconButton>
      <MenuIcon/>
      </IconButton>
      <img src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="gmail" />
    
    </div>
    <div className="header__middle">
        <SearchIcon/>
        <input  placeholder="Search mail"   type="text" />
        <ArrowDropDownIcon className="header__inputCaret"/>
    
    </div> 
    <div className="header__right">
       <IconButton>
        <AppsIcon/>
       </IconButton>
       <IconButton>
        <NotificationsIcon/>
      </IconButton>
          <Avatar onClick={signOut}src ={user?.photoUrl}/>
    </div>
      
    </div>
  )
}
export default Header
