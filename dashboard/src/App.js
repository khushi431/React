import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/login';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const[isLogin, setIsLogin] = useState(false);
  const[isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader
  }

  // useEffect(() =>{

  //   alert(isToggleSidebar)
    
  // },[isToggleSidebar])


  return (
    <>     
    <BrowserRouter>
    <MyContext.Provider value={values}>
    {
        isHideSidebarAndHeader!== true && 
        <Header />
      }
      

    <div className='main d-flex'>
      {
        isHideSidebarAndHeader!== true &&(
        <div className={`sidebarWrapper ${isToggleSidebar === true? 'toggle' : ''}`}>
        <Sidebar />
          </div>
      )}
   

      <div className={`content ${isHideSidebarAndHeader === true && 'full'}  ${isToggleSidebar === true? 'toggle' : ''}`}>
      <Routes>
      <Route>
        <Route path='/' element ={<Dashboard />} /> 
        <Route path='/dashboard' element ={<Dashboard />} /> 
        <Route path='/login' element ={<Login />} /> 
      </Route>
    </Routes>
      </div>
    </div>
    </MyContext.Provider> 
    </BrowserRouter>
    </>

  );
}

export default App;
export {MyContext}








// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/Dashboard';
// import Header from './components/Header';
// // import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <div>     
//     <BrowserRouter>
//     <Header />
//       <Routes>
//       <Route>
//         <Route path='/' element ={<Dashboard />} /> 
//         <Route path='/dashboard' element ={<Dashboard />} /> 
//       </Route>
//     </Routes>

//     </BrowserRouter>
//     </div>

//   );
// }

// export default App;

