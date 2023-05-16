import React, { useState } from "react";
import userRegister from "../../assets/userRegister.jpg";
import logo from "../../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../Hooks/User/useLogin";

import { toast } from "react-toastify";

function Userlogin() {
  const {login, error, isloading} = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const loginuser = async (e) => {
    e.preventDefault();
    console.log('hjsjhjhj');
    await login(email, Password);
    // axios.post(
    //   "/login",{
    //     email,Password
    //   }
    // ).then((response)=>{
    //   const {create}=response.data
    //   // localStorage.setItem('userToken', token); // Store token in local storage
    //   toast.success('login successfully')
    //   navigate('/')
    // })
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block h-full">
          <img className="w-full h-full object-cover" src={userRegister} />
        </div>
        <div className="flex flex-col justify-center">
          <img className="w-40 h-40 mx-auto object-cover" src={logo} />
          <form
            className="max-w-[400px] w-full mx-auto bg-gray-200 p-8 px-8 rounded-lg"
            onSubmit={loginuser}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              LOGIN HERE
            </h2>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                className="rounded-lg"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="mobile"
              />
            </div>

            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="rounded-lg"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              LOGIN
            </button>
            <div className="flex mx-auto font-bold">
              <p className="flex items-center">
                Don't have account?
                <span className="p-2 underline">
                  <NavLink to="/register">sign up </NavLink>
                </span>
              </p>
            </div>
            <div className="flex mx-auto font-bold">
              <p className="flex items-center">Forgot password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
