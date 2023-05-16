import React, { useState,useEffect } from 'react'

import Basetable from '../../Component/Basetable'
import Adminsidebar from '../../Component/Adminsidebar'
import { NavLink } from 'react-router-dom'

import { getApi } from '../../services/apiCalls'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const CustomerView=()=> {
  const[customer,setcustomer]=useState([])
  const [search, setsearch] = useState("");
    

  

  useEffect(()=>{
    getApi('/admin/customerdisplay',(response)=>{
      const{message,data}=response.data
      console.log(response.data);
     
        console.log("successful");
        setcustomer(data)
    
    })
  },[])
  const columns=[
    {
        name:"#",
        cell:(row,index)=><div>{index+1}</div>,
    },
   
    {
        name:"Name",
        selector:(row)=>row.name,
        sortable:true
    },
    {
      name:"Email",
      selector:(row)=>row.email,
      sortable:true
  },
  {
    name:"Mobile",
    selector:(row)=>row.mobile,
    sortable:true
},
    {
        name:"Action",
        selector:(row)=><button className='bg-red-900  text-white font-bold  py-2 px-4 rounded'>Block</button>
    },
   
    
    
];


  return (
    <>
    <div>
         <div>
   <div className='flex gap-24 mx-auto'>
              <Adminsidebar/>
                
                  <div className='d-flex w-8/12 flex-column align-items-center'>
                  
                  <button class="bg-white  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5 mr-40">
       
            </button>

  
                      <Basetable
                          columns={columns}
                           data={customer}
                          title={"CUSTOMER MANAGEMENT"}
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
      </div>
    </>
  )
}


export default CustomerView