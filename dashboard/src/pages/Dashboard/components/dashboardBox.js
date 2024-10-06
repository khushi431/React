// import { useEffect } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;
const DashboardBox = (props) => {

    

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 
    
        // useEffect (() =>{
        //     console.log(props.color);
        // }, [])
        return(
            <>
              <Button className="dashboardBox" style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]} )`
              }}>
                <div className="d-flex w-100">
                         <div className="col1">
                            <h4 className="text-white mb-0">Total Users</h4>
                            <span className="text-white">007</span>
                        </div>

                    </div> 
                    <div className="d-flex align-items-center w-100">
            <h6 className="text-white mb-0 mt-0">Last Month</h6>
            <div className='ml-auto'>
            <Button className="ml-auto toggleIcon" onClick={handleClick}><MoreVertIcon /></Button>
            <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        
          <MenuItem onClick={handleClose}>
         Last Day
          </MenuItem>

          <MenuItem onClick={handleClose}>
         Last Week
          </MenuItem>

          <MenuItem  onClick={handleClose}>
         Last Month
          </MenuItem>

          <MenuItem onClick={handleClose}>
         Last Year
          </MenuItem>

      </Menu>
            </div>
        </div>

                </Button>

            {/* <div className="dashboardBox">
            </div>

            <div className="dashboardBox">
            </div>

            <div className="dashboardBox">
            </div> */}
        </>
    );
}

export default DashboardBox