import {Link}  from 'react-router-dom'
import React, {useContext, useState} from 'react'
import logo from '../../assets/images/logo.jpg'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import SearchBox from '../SearchBox';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../../App';
import Login from '../../pages/login';



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationsDrop, setisOpenNotificationsDrop] = useState(false);
    const open = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationsDrop);

    const [isLogin, setIsLogin] = useState(false);

    const context = useContext(MyContext)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleOpenNotificationsDrop = () => {
        setisOpenNotificationsDrop(true)
      };

    const handleCloseNotificationsDrop = () => {
        setisOpenNotificationsDrop(false)
      };
  

    return(
        <>
        <header className='d-flex align-items-center'>
            <div className="container-fluid w=100">
                <div className="row d-flex align-items-center w=100">
                {/* logo wrapper */}
                <div className="col-sm-2 part-1">
                    <Link to = {'/'}className='d-flex align-items-center logo'>
                        <img src= {logo} alt='' />
                        <span className='ml-2'>ECOMMERCE</span>
                    </Link> 
                </div>

                <div className="col-sm-3 d-flex align-items-center part-2">
                    <Button className='rounded-circle mx-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)} >
                    {
                      context.isToggleSidebar  ===false ? <MdMenuOpen /> : 
                      <MdMenu /> 
                    }
                    </Button>
                    <SearchBox />
                    </div>

                    
                <div className="col-sm-7 d-flex align-items-center justify-content-end part-3">
                    <Button className='rounded-circle mx-3' ><FaShoppingCart /></Button>
                   
                    <Button className='rounded-circle mx-3' ><MdEmail/></Button>
                    <Button className='rounded-circle mx-3' onClick={handleOpenNotificationsDrop}  ><FaBell  /></Button>
                    <Menu
               
               anchorEl={isOpenNotificationsDrop}
               className='Notifications dropdown-list'
               id="notifications"
               open={openNotifications}
               onClose={handleCloseNotificationsDrop}
               onClick={handleCloseNotificationsDrop}
               slotProps={{
                 paper: {
                   elevation: 0,
                   sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                       width: 32,
                       height: 32,
                       ml: -0.5,
                       mr: 1,
                     },
                     '&::before': {
                       content: '""',
                       display: 'block',
                       position: 'absolute',
                       top: 0,
                       right: 14,
                       width: 10,
                       height: 10,
                       bgcolor: 'background.paper',
                       transform: 'translateY(-50%) rotate(45deg)',
                       zIndex: 0,
                     },
                   },
                 },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
             >

                <div className='head pl-3 pb-0'>
                <h4> Orders(12) </h4>
                </div>
                <Divider className='mb-1' />
              <div className='scroll'>  
               <MenuItem  onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
               </MenuItem>
               <MenuItem className='infor' onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
               </MenuItem>
               <MenuItem className='infor' onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
               </MenuItem>
               <MenuItem className='infor' onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
               </MenuItem>
               <MenuItem className='infor' onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
               </MenuItem>
               <MenuItem className='infor' onClick={handleClose}>
                <div className=' d-flex '>
                    <div d-flex>
                    <div className='userImg'>
                    <span className='rounded-circle'>
                        <img src = "https://i.pravatar.cc/300" />
                    </span>
                    </div>
                    </div>
                    <div className='dropdownInfo info'>
                        <h4>
                            <span>
                            <b>Khushi </b>
                                added to his favourite list
                            <b> Leather belt steve madame</b>
                            </span>
                        </h4>
                        <p className='test-sky mb-0'>few seconds ago</p>
                    </div>
                     </div>
                </MenuItem>
                </div>
             </Menu>
                    <Button className='rounded-circle mx-3' onClick={handleClick} >< IoPersonSharp /></Button>
                    <Menu
               
               anchorEl={anchorEl}
               id="account-menu"
               open={open}
               onClose={handleClose}
               onClick={handleClose}
               slotProps={{
                 paper: {
                   elevation: 0,
                   sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                       width: 32,
                       height: 32,
                       ml: -0.5,
                       mr: 1,
                     },
                     '&::before': {
                       content: '""',
                       display: 'block',
                       position: 'absolute',
                       top: 0,
                       right: 14,
                       width: 10,
                       height: 10,
                       bgcolor: 'background.paper',
                       transform: 'translateY(-50%) rotate(45deg)',
                       zIndex: 0,
                     },
                   },
                 },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
             >
               <MenuItem onClick={handleClose}>
                 <Avatar /> Profile
               </MenuItem>
               <MenuItem onClick={handleClose}>
                 <Avatar /> My account
               </MenuItem>
               <Divider />
               <MenuItem onClick={handleClose}>
                 <ListItemIcon>
                   <PersonAdd fontSize="small" />
                 </ListItemIcon>
                 Add another account
               </MenuItem>
               <MenuItem onClick={handleClose}>
                 <ListItemIcon>
                   <Settings fontSize="small" />
                 </ListItemIcon>
                 Settings
               </MenuItem>
               <MenuItem onClick={handleClose}>
                 <ListItemIcon>
                   <Logout fontSize="small" />
                 </ListItemIcon>
                 Logout
               </MenuItem>
             </Menu>
              {
                context.isLogin!==true ? 
                <Link to ={'/Login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                :
             
                <Button className='btn-blue '>Sign Out</Button>
              }
         
   </div>
                {/* <button className="btn btn-danger">Header</button> */}
            </div>
            </div>
        </header>
        </>
    );
}

export default Header;
