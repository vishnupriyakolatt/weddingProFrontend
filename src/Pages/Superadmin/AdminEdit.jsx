import React, { useEffect, useState } from 'react'
import Superadminbar from '../../Component/Superadminbar';
import axios from '../../instance/axios'
import {useNavigate,useParams } from 'react-router-dom';


const AdminEdit=()=> {
    const {id}=useParams();
    //const history = useHistory();
    const Navigate=useNavigate()
    
    console.log(id)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[address,setAddress]=useState('')
    const[location,setLocation]=useState('')
    const[image,setImage]=useState('')


    useEffect(()=>{
        const fetchadmin=async()=>{
            const response = await axios.get(`/superadmin/viewadminsingle/${id}`);
            const admin=response.data;
            setName(admin.name);
            setEmail(admin.email);
            setMobile(admin.mobile)
            setAddress(admin.address)
            setLocation(admin.location)
            setImage(admin.image)
        }
        fetchadmin();
        

    },[id]);

const updateadmin=async(e)=>{
    e.preventDefault()
    const updateadmin={name,email,mobile,address,location};
    await axios.put(`/superadmin/adminedit/${id}`,updateadmin)
    Navigate("/superadmin/getadmin")
    
}

  return (
    <div>
        <div className='flex gap-24'>
      <Superadminbar/>
        
        <div className='py-2'>
            <section className=" py-1 bg-blueGray-50 ">
                <div className="w-full lg:w-full px-4 mx-auto mt-6">
                    <form  encType="multipart/form-data" onSubmit={updateadmin}>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-l-emerald-900">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-center">
                                    <h6 className="text-blueGray-700 text-xl font-bold">
                                        UPDATE ADMIN DETAILS
                                    </h6>

                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">


                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3 mt-8">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Name
                                            </label>
                                            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />

                                        </div>
                                    </div>
                                  

                                  
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3 mt-8">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Mobile
                                            </label>
                                            <input type="text" name="mobile" value={mobile} onChange={e => setMobile(e.target.value)}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Email
                                            </label>
                                            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Address
                                            </label>
                                            <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Location
                                            </label>
                                            <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="image-upload">
                                                Upload Image
                                            </label>
                                            <input type="file" id="image" name="image" accept="image/*"  onchange={e=>setImage(e.target.files[0])}  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />


                            </div>
                        </div>
                        <div className="button flex justify-center">
                            <button className="bg-black text-white active:bg-pink-600 font-bold uppercase  px-4 py-2 rounded text-xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit" >
                                UPDATE
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    </div>
    </div>
  )
}


export default AdminEdit