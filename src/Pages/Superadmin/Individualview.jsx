import React, { useEffect, useState } from "react";
import Superadminbar from "../../Component/Superadminbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from '../../instance/axios';
import { useAuthContext } from "../../Hooks/useAuthContext";
import ClipLoader from "react-spinners/ClipLoader";

const Individualview = () => {
  const { id } = useParams("");
  console.log(id);
  const {superadmin}=useAuthContext()
  // const [getuserdata, setuserdata] = useState({ name: "", email: "", phone: "" });
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[gender,setGender]=useState('')
  const[email,setEmail]=useState('')
  const[mobile,setMobile]=useState('')
  const[address,setAddress]=useState('')
  const[location,setLocation]=useState('')
  const[image,setImage]=useState('')
  const [loading, setloading] = useState(true);
useEffect(()=>{
  const viewsingle = async (e) => {
    
    const res = await axios.get(`/superadmin/viewadminsingle/${id}`,{
      headers: {
        Authorization: `${superadmin.token}`,
      },
  
    });
    const userindividual = res.data;
    
    setName(userindividual.name);
    setAge(userindividual.age)
    setGender(userindividual.gender)
    setEmail(userindividual.email);
    setMobile(userindividual.mobile)
    setAddress(userindividual.address)
    setLocation(userindividual.location)
    setImage(userindividual.image)
  }
  viewsingle();

  setloading(false);
},[id])
  

  return (
    <div className="flex gap-24">
      <Superadminbar />
      {loading ? (
              <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <ClipLoader color={"#808080"} size={150} />
              </div>
            ) : (
      <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">



  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
 
	
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 ">
	

		<div class="p-4 md:p-12 text-center lg:text-left">
   
			
			<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"><img className='rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center' src={image}/></div>
			
			<h1 class="text-3xl font-bold pt-8 lg:pt-0">{name}</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p class="pt-4 text-xl text-black font-bold flex items-center justify-center lg:justify-start">PERSONAL DETAILS</p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start ">Gender:<p className="text-black">{gender}</p></p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start">Age:<p className="text-black">{age}</p></p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start">Email:<p className="text-black">{email}</p> </p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start">Mobile: <p className="text-black">{mobile}</p></p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start">Address: <p className="text-black">{address}</p></p>
      <p class="pt-4 text-base text-blue-950 font-bold flex items-center justify-center lg:justify-start">Location: <p className="text-black">{location}</p></p>
		
			<div class="pt-12 pb-8">
				<NavLink to='/superadmin/getadmin'><button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				  HOME</button> </NavLink>
			
			</div>

		
			
			

		</div>

	</div>
	
	
	<div class="w-full lg:w-2/5">
		
		<img src={image} class="rounded lg:rounded-lg shadow-2xl hidden lg:block"/>
		
		
	</div>
	
	
	
	 

</div>



     </div>
     
      )}
    </div>
  );
};

export default Individualview;
