import React,{useState} from 'react'
import {HiMenuAlt3} from "react-icons/hi";
import {MdOutlineDashboard} from "react-icons/md";
import {GiPartyPopper} from "react-icons/gi";
import {GiPartyHat} from "react-icons/gi";
import {FaHotel} from "react-icons/fa";
import {GiPartyFlags} from "react-icons/gi";
import {FaPlaceOfWorship} from "react-icons/fa";

import {AiFillCamera} from "react-icons/ai";

import {FaUserAlt} from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useAdminLogout } from '../Hooks/Admin/useAdminLogout';


function Adminsidebar() {

  const {logout}=useAdminLogout();
  const{admin}=useAuthContext()
  const handlelogout=()=>{
    logout()
  }
  const menus=[
    {name:"Dashboard",link:'/',icon:MdOutlineDashboard },
    {name:"Profile",link:'/admin/profile/:id',icon:GiPartyPopper },
    {name:"Venue-Category",link:'/admin/Venueview',icon:FaHotel },
    {name:"Venue",link:'/admin/venueDisplay',icon:FaPlaceOfWorship },
    {name:"Decorations",link:'/admin/Decordisplay',icon:GiPartyFlags },
    {name:"Photography",link:'/admin/photographerview',icon:AiFillCamera },
    {name:"Customers",link:'/admin/customerview',icon:FaUserAlt },
    
  ];
  const [open,setOpen]=useState(true)
  return (
<>
<section className='flex gap-6'>
  <div className={`bg-[#0e0e0e] min-h-screen w-72 ${open ? 'w-72':'w-16'}duration-500 text-gray-100 px-4`}>
    <div className="py-3 flex justify-end">
     <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>
    </div>
    <div className='mt-4 flex flex-col gap-4 relative'>
      {
        menus?.map((menu,i)=>(
<Link to={menu?.link} key={i} className="flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
        <div>
          {React.createElement(menu?.icon,{size:"20"})}
        </div>
        <h2>{menu?.name}</h2>
      </Link>
        ))

       

      }
      <Link to="/admin/" className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
             <IoIosLogOut/>
              <h2 onClick={handlelogout}>Logout</h2>
            </Link>
    
    </div>
  </div>
  
</section>
</>
  )
}

export default Adminsidebar