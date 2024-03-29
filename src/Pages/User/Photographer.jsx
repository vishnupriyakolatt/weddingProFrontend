
import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header';
import logo from '../../assets/logo.jpg';
import axios from '../../instance/axios'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';
import ClipLoader from 'react-spinners/ClipLoader';

function Photographer() {
    const[photo,setPhoto]=useState([])
    const [loading, setloading] = useState(true);
 const{user}=useAuthContext()

    // useEffect(()=>{
    //     getApi('/photodisplay',(response)=>{
        
    //         const{message,data}=response.data


    //         setPhoto(data)
    
    //     })
    // },[])
    const getPhotographer=async()=>{
      try {
        const response=await axios.get('/photodisplay',{
          headers: {
            Authorization: `${user.token}`,
          },
        });
        console.log("hiii");
        const { message, data } = response.data;
        console.log(data);
      
        setPhoto(data)
        setloading(false);
      } catch (error) {
        
      }
    }
    useEffect(() => {
      getPhotographer()
       }, []);

 const datas = photo.map((data)=>{
	return (
<div class="min-h-screen bg-gray-100 flex justify-center items-center mt-8">
        <div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg w-full">
          <div class="flex justify-center">
            <img
              class="rounded-t-lg object-cover w-full h-64"
              src={data.image[0]}
              alt=""
            />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center">
                {data.pname}
              </h5>
            </a>
            
         
  <div class="container mx-auto p-9 bg-gray-300 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 mt-0">
    <div class="flex justify-between items-center mt-0">
        {/* <div class="p-2"> */}
        <table className="text-xs my-3 border-red-100">
  <tbody>
 
    <tr>
      <td className="px-2 py-2 text-lg font-extrabold">Experience</td>
      <td className="px-2 py-2 text-red-600 text-lg font-bold">{data.pexperiance} Years</td>
    </tr>
    <tr>
      <td className="px-2 py-2 text-lg font-extrabold">Rent/Day</td>
      <td className="px-2 py-2 text-lg  text-red-600 font-bold">RS {data.rate}</td>
    </tr>
    
    <tr>
      <td colSpan="2" className="px-2 py-2">
        <NavLink to={`/photosingle/${data._id}`}>
          <button className="text-white text-sm font-bold bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            View
          </button>
        </NavLink>
      </td>
    </tr>
  </tbody>
</table>


           
        {/* </div> */}
    
      </div>
      </div>
  
          </div>
        </div>
      </div>  )

})

	return (
    <div>
      <Header />
      <div className="w-full bg-white">
        <div> </div>
        {loading ? (
          <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <ClipLoader color={'#808080'} size={150} />
          </div>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">{datas}</div>
        )}
     
  
    </div>
    </div>

      
       
 
  )
}

export default Photographer