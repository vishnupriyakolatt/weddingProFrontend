import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../instance/axios';
import { toast } from 'react-toastify';

function Forgot() {
  const [email, setEmail] = useState("");
 
  const navigate = useNavigate(); // Add useNavigate hook

  const forgotpass = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post('/forgot', formData);
      console.log(response);
      toast.error(response.data.erro);
      if (response.data.message) {
        navigate('/newpass'); // Use navigate function to redirect
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Forgot password</p>
              </div>

              <div class="mb-6">
  <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Email</label>
  <input type="email" id="success"      onChange={(e) => setEmail(e.target.value)} class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Success input"/>
  <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> check your verification code</p>


</div>
<button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={forgotpass}>Verify</button>
    </div>
            </div>
            </div>

           
      </div>
    </div>


        
 
  )
}

export default Forgot