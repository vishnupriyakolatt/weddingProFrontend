import React, { useState,useEffect } from 'react'
import axios from '../../instance/axios'
import Basetable from '../../Component/Basetable'
import Adminsidebar from '../../Component/Adminsidebar'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from '../../Hooks/useAuthContext'
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
const CustomerView = () => {
  const { admin } = useAuthContext();
  const [customer, setCustomer] = useState([]);
  const [loading, setloading] = useState(true);
 
    const getCustomer = async () => {
      try {
        const response = await axios.get('/admin/customerdisplay', {
          headers: {
            Authorization: `${admin.token}`,
          },
        });
        const { message, data } = response.data;
        console.log(response.data);
        console.log('Successful');
        setCustomer(data);
        setloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
    getCustomer();
  }, []);
  const handleBlock = async (id) => {
    try {
      const confirmResult = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to block/unblock the user. This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
      });
  
      if (confirmResult.isConfirmed) {
        await axios.put(`/admin/blockuser/${id}`, {
          headers: {
            Authorization: admin.token,
          },
        });
  
        await getCustomer();
        toast.success('User blocked/unblocked successfully.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to block/unblock user.');
    }
  };
  
  
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
  name: "Block",
  selector: (row) => (
    <button
      onClick={() => handleBlock(row._id)}
      className={`${
        row.isBlocked ? 'bg-green-700 ':'bg-red-700'
      } text-white font-bold py-2 px-4 rounded-full`}
    >
      {row.isBlocked ? 'Unblock' : 'Block'}
    </button>
  ),
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
            {loading ? (
              <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <ClipLoader color={"#808080"} size={150} />
              </div>
            ) : (
  
  
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
                                  
                              />
                          }
                      />
                      )}
                  </div>
              </div>
     
  
      </div>
      </div>
    </>
  )
}


export default CustomerView