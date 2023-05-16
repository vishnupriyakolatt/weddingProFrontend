import React, { useEffect, useState } from 'react'
import axios from '../../instance/axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Basetable from '../../Component/Basetable'
import Adminsidebar from '../../Component/Adminsidebar'

import { getApi } from '../../services/apiCalls'
import { toast } from 'react-toastify'

const Venuecat=()=> {
    const[venuecat,setVenuecat]=useState([])
    const [search, setsearch] = useState("");

 

    useEffect(()=>{
        getApi('/admin/Venuedisplay',(response)=>{
            const{message,verified,data}=response.data
            console.log(response.data);
            if(verified){
                console.log("successful");
                setVenuecat(data)
            }else{
                toast(message)
            }
        })
    },[])
    const columns=[
     {
         name:"#",
         cell:(row,index)=><div>{index+1}</div>,
     },
     {
         name:"Image",
         selector:(row)=><img width={90} height={90} src={row.image}/>
         
     },
     {
         name:"Name",
         selector:(row)=>row.name,
         sortable:true
     },
    
    
     
     {
         name:"Action",
         selector:(row)=><NavLink to={`/superadmin/editeventcat/${row._id}`}><button className='bg-green-900  text-white font-bold py-2 px-4 rounded'><i class="fa-sharp fa-solid fa-pencil"></i></button></NavLink>
     },
     {
         name:"Action",
         selector:(row)=><button className='bg-red-900  text-white font-bold  py-2 px-4 rounded'><i class="fa-solid fa-trash-can"></i></button>
     },
    
     
     
 ];

     
  return (

 <div>
 <div className='flex gap-24 mx-auto'>
                <Adminsidebar/>
              
                <div className='d-flex w-8/12 flex-column align-items-center mx-auto'>
                <NavLink to="/admin/VenueAdd">
                <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
            ADD NEW EVENT CATEGORY
          </button>
          </NavLink>

                    <Basetable
                        columns={columns}
                         data={venuecat}
                        title={"VENUE CATEGORY MANAGEMENT"}
                        pagination
                        fixedHeader
                        HighlightOnHover
                        subHeader
                        subHeaderComponent={
                            <input
                                type="text"
                                placeholder="Search"
                                className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black "
                                value={search}
                                onChange={(e) => setsearch(e.target.value)}
                            />
                        }
                    />

                </div>
            </div>
   

    </div>

    
  )
}

export default Venuecat