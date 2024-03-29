import React from 'react'
import axios from '../../instance/axios'
import BaseTable from '../../Component/Basetable'
import { NavLink } from 'react-router-dom'
import Adminsidebar from '../../Component/Adminsidebar'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import { useAuthContext } from '../../Hooks/useAuthContext';


const Photoview=()=> {
  const{admin}=useAuthContext()
  const[photographer,setPhotographer]=useState([])
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(true);

  const fetchPhotographerView = async () => {
    try {
      const arr=[12,3,4,5,6]
      const response = await axios.get('/admin/photographerView', {
        headers: {
            Authorization: `${admin.token}`,
        },
      });
      const { message, data } = response.data;
      console.log(response.data);
      console.log('Successful');
       setPhotographer(data);
         setloading(false);
    } catch (error) {
      console.error('Error fetching photographer view:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const confirmResult = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete the venue. This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      });
  
      if (confirmResult.isConfirmed) {
        await axios.put(`/admin/deletephoto/${id}`, {
          headers: {
            Authorization: `${admin.token}`,
          },
        });
        await fetchPhotographerView();
        toast.success('Decor deleted successfully.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete venue category.');
    }
  };

  useEffect(() => {
    fetchPhotographerView();
  }, []);
  
  

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
        selector:(row)=><button onClick={()=>handleDelete(row._id)} className='bg-red-900  text-white font-bold  py-2 px-4 rounded'><i class="fa-solid fa-trash-can"></i></button>
    },
      
      
  ];
 
 
return (
  <div>
     <>
          <div className='flex gap-24 mx-auto'>
          <Adminsidebar/>
            
              <div className='d-flex w-8/12 flex-column align-items-center mx-auto'>
              <div className="flex justify-end">
              <NavLink to="/admin/photographeradd">
              <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
          ADD NEW PHOTOGRAPHER
        </button>
        </NavLink>
        </div>
 {loading ? (
              <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <ClipLoader color={"#808080"} size={150} />
              </div>
            ) : (
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
   )}
              </div>
          </div>
      </>
      </div>

)
}


export default Photoview