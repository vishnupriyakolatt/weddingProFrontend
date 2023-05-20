import React, { useEffect, useState } from 'react'
import axios from '../../instance/axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Superadminbar from '../../Component/Superadminbar'
import { NavLink } from 'react-router-dom'
import Basetable from '../../Component/Basetable'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader';
import { useAuthContext } from "../../Hooks/useAuthContext";
import Swal from 'sweetalert2';

const Venuecat=()=> {
 const{id}=useParams();
 const {superadmin}=useAuthContext()
 const navigate=useNavigate();
    const[venuecat,setVenuecat]=useState([])
    const [search, setsearch] = useState("");
    const [filtervenue,setFiltervenue]=useState([])
    const[loading,setloading]=useState(true)
    


const getvenue=async()=>{
    try {
        const response=await axios.get('/superadmin/showVenue-type',{
            headers: {
                Authorization: `${superadmin.token}`,
              },
          
        });
        console.log(superadmin.token);
        const { message, data } = response.data;
            console.log(response.data);
           
              console.log("successful");
              setVenuecat(data);
              setFiltervenue(data);
          
              toast(message);
            
            setloading(false);

    } catch (error) {
        
    }
}
const handleDelete = async (id) => {
  try {
    const confirmResult = await Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete the venue category. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (confirmResult.isConfirmed) {
      await axios.put(`/superadmin/deletecat/${id}`, {
        headers: {
          Authorization: `${superadmin.token}`,
        },
      });
      await getvenue();
      toast.success('Venue category deleted successfully.');
    }
  } catch (error) {
    console.log(error);
    toast.error('Failed to delete venue category.');
  }
};
 

useEffect(()=>{
    getvenue()
  },[]);
useEffect(()=>{
    setFiltervenue(
        venuecat.filter((ven) =>
        ven.name.toLowerCase().includes(search.toLowerCase())
        )
    );
},[search,venuecat])


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
         selector:(row)=><button onClick={()=>handleDelete(row._id)} className='bg-red-900  text-white font-bold  py-2 px-4 rounded'><i class="fa-solid fa-trash-can"></i></button>
     },
    
     
     
 ];

  return (

 <div>
 <div className='flex gap-24 mx-auto'>
                <Superadminbar/>
              
                <div className='d-flex w-8/12 flex-column align-items-center mx-auto'>
                <div className="flex justify-end">
                <NavLink to="/superadmin/addvenuecat">
                <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
            ADD NEW EVENT CATEGORY
          </button>
          </NavLink>
          </div>
          {loading ? (
             <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
             <ClipLoader color={'#808080'} size={150} />
           </div>
            ) : (

                    <Basetable
                        columns={columns}
                         data={filtervenue}
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
                    />)

                    }</div>
            </div>
   

    </div>

    
  )
}

export default Venuecat