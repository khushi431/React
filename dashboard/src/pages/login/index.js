//THIS IS THE CODE WHERE NO VALIDATIONS ON FORM IS APPLIED 


// import { useContext, useEffect, useState } from 'react';
// import logo from '../../assets/images/logo.jpg';
// import { MyContext } from '../../App';
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import googleIcon from  '../../assets/images/Logo-google-icon-PNG.png'


// const Login = () => {

//   const [inputIndex, setInputIndex] = useState(null); 
//   const [isShowPassword, setIsShowPassword] = useState(false); 
//   const context = useContext(MyContext);

//   // Hide the sidebar and header when on the login page
//   useEffect(() => {
//     context.setisHideSidebarAndHeader(true); // Hide header and sidebar
//     return () => {
//       context.setisHideSidebarAndHeader(false); // Show them again when leaving login
//     };
//   }, [context]);

//   const focusInput = (index) => {
//     setInputIndex(index);
//   };

//   const togglePasswordVisibility = () => {
//     setIsShowPassword((prevState) => !prevState);
//   };

//   return (
//     <section className="loginSection">
//       <div className="loginBox">
//         <div className="logo text-center">
//           <img src={logo} width={"60px"} alt="Logo" />
//           <h5 className='logintext'>Login to my website</h5>
//         </div>
//         <div className='wrapper mt-3 card border'>
//           <form>

//             <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
//               <span className='icon'><MdEmail /></span>
//               <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Enter your email'
//                 onFocus={() => focusInput(0)}
//                 onBlur={() => setInputIndex(null)}
//               />
//             </div>

//             <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
//               <span className='icon'><RiLockPasswordFill /></span>
//               <input
//                 type={isShowPassword ? 'text' : 'password'}
//                 className='form-control'
//                 placeholder='Enter your password'
//                 onFocus={() => focusInput(1)}
//                 onBlur={() => setInputIndex(null)}
//               />

//               {/* Render only one eye icon at a time based on state */}
//               <span className='toggleShowPassword' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
//                 {isShowPassword ? <IoEyeOff /> : <IoEye />}
//               </span>
//             </div>

//             <div className='form-group'>
//               <Button className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
//             </div>

//             <br />

//             <div className='form-group text-center'>
//               <Link to = {"/forgot-password"} className = "link">Forgot Password</Link>
//               {/* <div className='d-flex align-items-center justify-content-center or'>
//                 <span className='line'></span>
//                 <span className='txt'>or</span>
//                 <span className='line'></span>
//               </div> */}
 
//             <div class="d-flex align-items-center or ">
//               <hr class="flex-grow-1 line" />
//               <span class=" txt">or</span>
//               <hr class="flex-grow-1 line" />
//             </div>

//             <Button variant="outlined"  className='w-100 btn-lg btn-big loginWithGoogle'>
//               <img src= {googleIcon} width={'25px'}  className='google'/>&nbsp; Sign In with Google
//             </Button>

//             </div>

//           </form>
//         </div>

//         <div className='wrapper mt-3 card border footer p-3'>
//           <span className='text-center'>
//             Don't have an Account? 
//             <Link to = {"/signUp"} className='link color signup ms-2' >Register </Link>
//           </span> 
//           </div>
//       </div>
//     </section>
//   );
// };

// export default Login;








// THIS IS  A CODE WHERE vALIDATIONS IS USED 

// import { useContext, useEffect, useState } from 'react';
// import logo from '../../assets/images/logo.jpg';
// import { MyContext } from '../../App';
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { IoEye, IoEyeOff } from "react-icons/io5";
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import googleIcon from '../../assets/images/Logo-google-icon-PNG.png';

// const Login = () => {
//   const [inputIndex, setInputIndex] = useState(null);
//   const [isShowPassword, setIsShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const context = useContext(MyContext);

//   // Hide the sidebar and header when on the login page
//   useEffect(() => {
//     context.setisHideSidebarAndHeader(true);
//     return () => {
//       context.setisHideSidebarAndHeader(false);
//     };
//   }, [context]);

//   const focusInput = (index) => {
//     setInputIndex(index);
//   };

//   const togglePasswordVisibility = () => {
//     setIsShowPassword((prevState) => !prevState);
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 6; // Minimum password length
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form submission

//     const newErrors = {};

//     // Validate email
//     if (!validateEmail(email)) {
//       newErrors.email = 'Please enter a valid email address.';
//     }

//     // Validate password
//     if (!validatePassword(password)) {
//       newErrors.password = 'Password must be at least 6 characters long.';
//     }

//     // Set errors state
//     setErrors(newErrors);

//     // If no errors, proceed with login logic
//     if (Object.keys(newErrors).length === 0) {
//       console.log('Logging in with:', { email, password });
//       // Add login logic here (e.g., API call)
//     }
//   };

//   return (
//     <section className="loginSection">
//       <div className="loginBox">
//         <div className="logo text-center">
//           <img src={logo} width={"60px"} alt="Logo" />
//           <h5 className='logintext'>Login to my website</h5>
//         </div>
//         <div className='wrapper mt-3 card border'>
//           <form onSubmit={handleSubmit}>

//             <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
//               <span className='icon'><MdEmail /></span>
//               <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Enter your email'
//                 value={email}
//                 onFocus={() => focusInput(0)}
//                 onBlur={() => setInputIndex(null)}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <span className="error text-danger">{errors.email}</span>}
//             </div>

//             <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
//               <span className='icon'><RiLockPasswordFill /></span>
//               <input
//                 type={isShowPassword ? 'text' : 'password'}
//                 className='form-control'
//                 placeholder='Enter your password'
//                 value={password}
//                 onFocus={() => focusInput(1)}
//                 onBlur={() => setInputIndex(null)}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span className='toggleShowPassword' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
//                 {isShowPassword ? <IoEyeOff /> : <IoEye />}
//               </span>
//               {errors.password && <span className="error text-danger">{errors.password}</span>}
//             </div>

//             <div className='form-group'>
//               <Button type="submit" className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
//             </div>

//             <br />

//             <div className='form-group text-center'>
//               <Link to={"/forgot-password"} className="link">Forgot Password</Link>

//               <div className="d-flex align-items-center or ">
//                 <hr className="flex-grow-1 line" />
//                 <span className="txt">or</span>
//                 <hr className="flex-grow-1 line" />
//               </div>

//               <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
//                 <img src={googleIcon} width={'25px'} className='google' />&nbsp; Sign In with Google
//               </Button>
//             </div>

//           </form>
//         </div>

//         <div className='wrapper mt-3 card border footer p-3'>
//           <span className='text-center'>
//             Don't have an Account?
//             <Link to={"/signUp"} className='link color signup ms-2'>Register </Link>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;








//THIS IS THE CODE WITH VALIDATIONS AND ERROR HANDLING AND NAVIGATIONS 

import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import googleIcon from '../../assets/images/Logo-google-icon-PNG.png';

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const context = useContext(MyContext);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
    return () => {
      context.setisHideSidebarAndHeader(false);
    };
  }, [context]);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  const togglePasswordVisibility = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Minimum password length
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const newErrors = {};

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate password
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    // Set errors state
    setErrors(newErrors);

    // If no errors, proceed with login logic
    if (Object.keys(newErrors).length === 0) {
      console.log('Logging in with:', { email, password });
      // Add login logic here (e.g., API call)

      // Navigate to home page after successful login
      navigate('/'); 
    }
  };

  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo text-center">
          <img src={logo} width={"60px"} alt="Logo" />
          <h5 className='logintext'>Login to my website</h5>
        </div>
        <div className='wrapper mt-3 card border'>
          <form onSubmit={handleSubmit}>

            <div className={`form-group mb-4 position-relative ${inputIndex === 0 && 'focus'}`}>
              <span className='icon'><MdEmail /></span>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your email'
                value={email}
                onFocus={() => focusInput(0)}
                onBlur={() => setInputIndex(null)}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error text-danger">{errors.email}</span>}
            </div>

            <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
              <span className='icon'><RiLockPasswordFill /></span>
              <input
                type={isShowPassword ? 'text' : 'password'}
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onFocus={() => focusInput(1)}
                onBlur={() => setInputIndex(null)}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='toggleShowPassword' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                {isShowPassword ? <IoEyeOff /> : <IoEye />}
              </span>
              {errors.password && <span className="error text-danger">{errors.password}</span>}
            </div>

            <div className='form-group'>
              <Button type="submit" className='btn-blue btn-lg w-100 btn-big'>Sign In</Button>
            </div>

            <br />

            <div className='form-group text-center'>
              <Link to={"/forgot-password"} className="link">Forgot Password</Link>

              <div className="d-flex align-items-center or ">
                <hr className="flex-grow-1 line" />
                <span className="txt">or</span>
                <hr className="flex-grow-1 line" />
              </div>

              <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                <img src={googleIcon} width={'25px'} className='google' />&nbsp; Sign In with Google
              </Button>
            </div>

          </form>
        </div>

        <div className='wrapper mt-3 card border footer p-3'>
          <span className='text-center'>
            Don't have an Account?
            <Link to={"/signUp"} className='link color signup ms-2'>Register </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;




