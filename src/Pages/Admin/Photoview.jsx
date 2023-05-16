import React from 'react'
import axios from '../../instance/axios'
import BaseTable from '../../Component/Basetable'
import { NavLink } from 'react-router-dom'
import Adminsidebar from '../../Component/Adminsidebar'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { getApi } from '../../services/apiCalls'



const Photoview=()=> {
  const[photographer,setPhotographer]=useState([])
  const [search, setsearch] = useState("");
 

   
    
    useEffect(()=>{
        getApi('/admin/photographerView',(response)=>{
          const{message,verified,data}=response.data
          console.log(response.data);
          if(verified){
            console.log("successful");
            setPhotographer(data)
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
          selector:(row)=><img width={90} height={90} src={row.image[0]}/>
          
      },
      {
          name:"Name",
          selector:(row)=>row.pname,
          sortable:true
      },
      {
          name:"Email",
          selector:(row)=>row.pemail
      },
     
      
      {
          name:"Action",
          selector:(row)=>
          <NavLink to={`/admin/photosingleview/${row._id}`}><button className='bg-green-900  text-white font-bold py-2 px-4 rounded'><i className='fa fa-eye' /></button></NavLink>

      },
      {
          name:"Action",
          selector:(row)=>
          <NavLink to={`/admin/photoEdit/${row._id}`}><button className='bg-green-900  text-white font-bold py-2 px-4 rounded'><i className='fa fa-pencil' /></button></NavLink>
      },
      {
          name:"Action",
          selector:(row)=><button className='bg-red-900  text-white font-bold py-2 px-4 rounded'><i class="fa-solid fa-trash-can"></i></button>
      },
      
      
  ];
 
 
return (
  <div>
     <>
          <div className='flex gap-24 mx-auto'>
          <Adminsidebar/>
            
              <div className='d-flex w-8/12 flex-column align-items-center mx-auto'>
              <NavLink to="/admin/photographeradd">
              <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
          ADD NEW PHOTOGRAPHER
        </button>
        </NavLink>

                  <BaseTable
                      columns={columns}
                       data={photographer}
                      title={"Photographer MANAGEMENT"}
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
      </>
      </div>

)
}


export default Photoview