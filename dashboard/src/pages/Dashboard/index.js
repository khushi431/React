import DashboardBox from "./components/dashboardBox";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { FaShoppingCart } from "react-icons/fa";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import CreateOutlined from '@mui/icons-material/CreateOutlined';
import Delete from '@mui/icons-material/Delete';



import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Pagination } from "@mui/material";




const Dashboard = () => {

    
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = React.useState('');
    const [showBysetCatBy, setshowBysetCatBy] = React.useState('');
    const [showBysetBrandBy, setshowBysetBrandBy] = React.useState('');
    const [showBysetSearchBy, setshowBysetSearchBy] = React.useState('');
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    }; 


    return(
        <>
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                <div className="col-md-8">
        <div className="dashboardBoxWrapper d-flex">
            <DashboardBox  color = {["#1da256", "#48d483"]} icon = {< AccountCircleRoundedIcon/>} />
            <DashboardBox  color = {["#c012e2", "#eb64fe"]} icon = { <FaShoppingCart />} />
            <DashboardBox  color = {["#2c78e5", "#60aff5"]} icon = {<ShoppingBagIcon/>} />
            <DashboardBox  color = {["#e1950e", "#f3cd29"]} icon = {<StarBorderPurple500Icon/>} />


        </div>
            </div>

            <div className="col-md-4 pl-0">
            <div className="box graphBox">
            <div className="d-flex align-items-center w-100">
            <h3 className="text-white mb-0 mt-0">Total Sales</h3>
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
        <br/>
            <h4 className="text-white font-weight-bolder">Rs: 35,4464</h4>
            <p className="text-white">Rs: 90,4673 in Last Month</p>
            </div>
         
            </div>

        </div>

        <div className="card shadow p-3 border-0 mt-4">
            <h3 className="hd">Best selling Products</h3>

            <div className="row cardFilters mt-3">
                <div className="col-md-3">
                    <h4>SHOW BY</h4>
                    <FormControl  size="small " className="w-100">
                    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBy}
          onChange={(e) => setshowBy(e.target.value)}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                </div>

                <div className="col-md-3">
                    <h4>CATEGORY BY</h4>
                    <FormControl  size="small " className="w-100">
                    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBysetCatBy}
          onChange={(e) => setshowBysetCatBy(e.target.value)}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                </div>

                <div className="col-md-3">
                    <h4>BRAND BY</h4>
                    <FormControl  size="small " className="w-100">
                    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBysetBrandBy}
          onChange={(e) => setshowBysetBrandBy(e.target.value)}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                </div>

                <div className="col-md-3">
                    <h4>SEARCH BY</h4>
                    <FormControl  size="small " className="w-100">
                    <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBysetSearchBy}
          onChange={(e) => setshowBysetSearchBy(e.target.value)}
          className="w-100"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                </div>


            </div>

            <div className="table-responsive mt-3 ">
              <table className="table table-bordered v-align">
                <thead className="thead-dark">
                  <tr>
                    <th>UID</th>
                    <th style={{width:'280px'}}>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SCALES</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>

                  <tr>
                    <td>#2</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                    <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className= "secondary" color="secondary" ><Visibility /></Button>
                        <Button className="success"  color="success" ><CreateOutlined  /></Button>
                        <Button className= "error" color="error"><Delete /></Button>
                      </div>
                      </td>                     
                  </tr>

                  <tr>
                    <td>#3</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                    <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className="success" color="success" ><CreateOutlined  /></Button>
                        <Button className="error" color="error"><Delete /></Button>
                      </div>
                      </td>                     
                  </tr>

                  <tr>
                    <td>#4</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                    <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly ">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success"  color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color="error"><Delete /></Button>
                      </div>
                      </td>                     
                  </tr>

                  <tr>
                    <td>#5</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                    <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className="success"  color="success" ><CreateOutlined  /></Button>
                        <Button className="error" color="error"><Delete /></Button>
                      </div>
                      </td>                      
                  </tr>

                  <tr>
                    <td>#6</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>

                  <tr>
                    <td>#7</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>

                  <tr>
                    <td>#8</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>

                  <tr>
                    <td>#9</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>

                  <tr>
                    <td>#10</td>
                    <td>
                      <div className="d-flex productBox">
                        <div className="imageWrapper">
                          <div className="img">
                            <img src = "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                        <h6>Tops and skirts for women....</h6>
                      <p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
                        </div>
                      </div>
                    </td>
                    <td>womens</td>
                    <td>richman</td>
                    <td>
                       <del className="old">Rs:2100</del>
                       <span className="new text-danger">Rs:1900</span>
                    </td>
                    <td>30</td>
                    <td>4.9</td>
                    <td>380</td>
                    <td>38k</td>
                    <td>
                      <div className="actions d-flex align-items-center justify-content-evenly">
                        <Button className="secondary" color="secondary" ><Visibility /></Button>
                        <Button className= "success" color="success" ><CreateOutlined  /></Button>
                        <Button className = "error" color= "error"><Delete /></Button>
                      </div>
                      </td>                  
                  </tr>


                </tbody>


              </table>

              <div className="d-flex tableFooter">
                <p>Showing <b> 12 </b>  of  <b>60</b> products</p>
                <Pagination count={10} color="primary" className="pagination"></Pagination>
              </div>



            </div>


        </div>
        
        </div>

        </>
    );
}

export default Dashboard 


{/* <td>
<div className="d-flex productBox">
  <div className="info">
  <h6>Tops and skirts for women....</h6>
<p>very comfortable clothes for summer, and light colors are avaiable in this items</p>
  </div>
</div>
</td> */}