import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../instance/axios";
import Superadminbar from "../../Component/Superadminbar";
import { Radio } from "@material-tailwind/react";
import { toast } from "react-toastify";


const Adminadd = () => {

  const [data, setdata] = useState("");
  const Navigate = useNavigate();
  function GenderChange(event) {
    setGender(event.target.value);
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const addAdmin = async (e) => {
    console.log(name);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("address", address);
    formData.append("location", location);
    formData.append("image", image);
    console.log(image);

    

try {
  const response=await axios.post('/superadmin/addadmin',formData,{
    headers: {
      
    },
  }) .then((response) => {
    console.log(response);
    if (response.data.message) {
      Navigate("/superadmin/getadmin");
    }
  });
  
} catch (error) {
  
}

  };


  return (
    <>
      <div className="flex gap-24">
        <Superadminbar />

        <div className="py-2">
          <section className=" py-1 bg-blueGray-50 ">
            <div className="w-full lg:w-full px-4 mx-auto mt-6">
              <form onSubmit={addAdmin} encType="multipart/form-data">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-l-emerald-900">
                  <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-center">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        ADD ADMIN DETAILS
                      </h6>
                    </div>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3 mt-8">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            Gender
                          </label>

                          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 black border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="gender"
                              value="male"
                              checked={gender === "male"}
                              onChange={GenderChange}
                            />
                            <label
                              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="radioDefault01"
                            >
                              Male
                            </label>
                          </div>
                          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                            <input
                              class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5  border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                              type="radio"
                              name="gender"
                              value="female"
                              checked={gender === "female"}
                              onChange={GenderChange}
                            />

                            <label
                              class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                              for="radioDefault02"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Age
                          </label>
                          <input
                            type="text"
                            name="age"
                            onChange={(e) => setAge(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Mobile
                          </label>
                          <input
                            type="text"
                            name="mobile"
                            onChange={(e) => setMobile(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlfor="grid-password"
                          >
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            onChange={(e) => setLocation(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="image-upload"
                          >
                            Upload Image
                          </label>
                          <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                </div>
                <div className="button flex justify-center">
                  <button
                    className="bg-black text-white active:bg-pink-600 font-bold uppercase text-2XL px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Adminadd;
