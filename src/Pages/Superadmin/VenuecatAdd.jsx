import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../../instance/axios"
import Superadminbar from '../../Component/Superadminbar'
import { toast } from 'react-toastify'
import { useAuthContext } from "../../Hooks/useAuthContext";
const VenuecatAdd=()=> {
    const{superadmin}=useAuthContext()
    const[data,setdata]=useState('')
    const Navigate=useNavigate()
    const [name,setName]=useState("")
    const[image,setImage]=useState("")


    const addVenuecat=async(e)=>{
        console.log(name)
        e.preventDefault();
        const formData=new FormData();
        formData.append('name',name)
        formData.append('image',image)
        console.log(image)
        try {
            const response=await axios.post('/superadmin/addVenuecat',formData,{
                headers: {
                    Authorization: `${superadmin.token}`,
                  },
            }).then((response) => {
    console.log(response);
    if (response.data.message) {
      Navigate("/superadmin/showvenuecat");
    }
  });
        } catch (error) {
            
        }

    }


  return (
    <div>
    <div className='flex gap-24'>
   <Superadminbar/>
     
     <div className='py-2 mx-auto'>
         <section className=" py-1 bg-blueGray-50  mt-40">
             <div className="w-full lg:w-full px-4 mx-auto mt-6">
                 <form onSubmit={addVenuecat} encType="multipart/form-data">
                     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-l-emerald-900">
                         <div className="rounded-t bg-white mb-0 px-6 py-6">
                             <div className="text-center flex justify-center">
                                 <h6 className="text-blueGray-700 text-xl font-bold">
                                ADD VENUE CATEGORY
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
                                         <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                     </div>
                                 </div>
                                 <div className="w-full lg:w-6/12 px-4">
                                     <div className="relative w-full mb-3">
                                         <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-5" htmlFor="image-upload">
                                             Upload Image
                                         </label>
                                         <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                     </div>
                                 </div>
                             </div>

                             <hr className="mt-6 border-b-1 border-blueGray-300" />


                         </div>
                     </div>
                     <div className="button flex justify-center">
                         <button className="bg-black text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit" >
                             Save
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

export default VenuecatAdd