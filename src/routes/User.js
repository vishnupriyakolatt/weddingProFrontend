
import React from "react";
import {Routes,Route, Navigate} from "react-router-dom";
import Adminlogin from "../Pages/Admin/Adminlogin";
import Dashboard from "../Pages/Admin/Dashboard";
import Homepage from "../Pages/User/Homepage";
import Userlogin from "../Pages/User/Userlogin";
import UserRegister from "../Pages/User/UserRegister";
import Otp from "../Pages/User/Otp";
import Photographer from "../Pages/User/Photographer";
import Venue from "../Pages/User/Venue";
import Decor from "../Pages/User/Decor";
import Decorsinglepage from "../Pages/User/Decorsinglepage";
import Bookpage from "../Pages/User/Bookpage";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Photosingle from "../Pages/User/Photosingle";
import Venusingle from "../Pages/User/Venusingle";

import Details from "../Pages/User/Details";



function User() {
  const {user}=useAuthContext()
  return (
 <fragments>
<Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={!user ?<Userlogin/>:<Navigate to='/'/>}/>
    <Route path='/register' element={<UserRegister/>}/>
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/photo' element={user ?<Photographer/>:<Navigate to='/login'/>}/>
    <Route path='/venue' element={user?<Venue/>:<Navigate to='/login'/>}/>
    <Route path='/Decor' element={user?<Decor/>:<Navigate to='/login'/>}/>
    <Route path='/Decorsingle/:id' element={user?<Decorsinglepage/>:<Navigate to='/login'/>}/>
    <Route path='/bookpage' element={<Bookpage/>}/>
    <Route path='/details' element={user?<Details/>:<Navigate to='/login'/>}/>

    <Route path='/venuesingle/:id' element={user?<Venusingle/>:<Navigate to='/login'/>}/>
    <Route path='/photosingle/:id' element={user?<Photosingle/>:<Navigate to='/login'/>}/>

</Routes>
</fragments>
  )
}

export default User

