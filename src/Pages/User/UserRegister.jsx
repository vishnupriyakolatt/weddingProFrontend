import React, { useState } from 'react';
import userRegister from '../../assets/userRegister.jpg';
import logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import axios from "../../instance/axios";
import { toast } from "react-toastify";

function UserRegister() {
  const navigate = useNavigate();

  const [Inpval, setInpval] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });

  const [errors, setErrors] = useState({});

  const addUserdata = async (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!Inpval.name) {
      validationErrors.name = "Please enter your name";
    }
    if (!Inpval.email) {
      validationErrors.email = "Please enter your email";
    }
    if (!Inpval.mobile) {
      validationErrors.mobile = "Please enter your mobile number";
    }
    if (!Inpval.password) {
      validationErrors.password = "Please enter a password";
    } else if (Inpval.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters long";
    }
    if (!Inpval.cpassword) {
      validationErrors.cpassword = "Please confirm your password";
    } else if (Inpval.cpassword !== Inpval.password) {
      validationErrors.cpassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('/signup', {
        ...Inpval
      }).then((data) => {
        console.log(data.data);
        navigate('/otp', { state: Inpval });
      })
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block h-full'>
        <img className='w-full h-full object-cover' src={userRegister} alt="User Register" />
      </div>
      <div className='flex flex-col justify-center'>
        <img className='w-40 h-40 mx-auto object-cover' src={logo} alt="Logo" />
        <form className='max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>REGISTER HERE</h2>
          <div className='flex flex-col py-2'>
            <label>Name</label>
            <input className='rounded-lg' type="text" onChange={(e) => setInpval({ ...Inpval, [e.target.name]: e.target.value })} name='name' />
            {errors.name && <p className="text-blue-900">{errors.name}</p>}
          </div>
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input className='rounded-lg' type="email" onChange={(e) => setInpval({ ...Inpval, [e.target.name]: e.target.value })} name='email' />
            {errors.email && <p className="text-blue-900">{errors.email}</p>}
          </div>
          <div className='flex flex-col py-2'>
            <label>Mobile</label>
            <input className='rounded-lg' type="text" onChange={(e) => setInpval({ ...Inpval, [e.target.name]: e.target.value })} name='mobile' />
            {errors.mobile && <p className="text-blue-900">{errors.mobile}</p>}
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='rounded-lg' type="password" onChange={(e) => setInpval({ ...Inpval, [e.target.name]: e.target.value })} name='password' />
            {errors.password && <p className="text-blue-900">{errors.password}</p>}
          </div>
          <div className='flex flex-col py-2'>
            <label>Confirm Password</label>
            <input className='rounded-lg' type="password" onChange={(e) => setInpval({ ...Inpval, [e.target.name]: e.target.value })} name='cpassword' />
            {errors.cpassword && <p className="text-blue-900">{errors.cpassword}</p>}
          </div>
          <button type="submit" className='bg-black text-white font-bold py-2 px-4 rounded' onClick={addUserdata}>REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default UserRegister;
