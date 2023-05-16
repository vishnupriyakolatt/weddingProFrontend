import React from 'react';
import {Routes,Route} from "react-router-dom";
import Dashboard from '../Pages/Superadmin/Dashboard'
import Superlogin from '../Pages/Superadmin/Superlogin'
import Adminview from '../Pages/Superadmin/Adminview';
import Adminadd from '../Pages/Superadmin/Adminadd';
import Individualview from '../Pages/Superadmin/Individualview';
import AdminEdit from '../Pages/Superadmin/AdminEdit';
import Venuecat from '../Pages/Superadmin/Venuecat';
import VenuecatAdd from '../Pages/Superadmin/VenuecatAdd';
import { useAuthContext } from '../Hooks/useAuthContext';
import { Navigate } from 'react-router-dom';


function Superadmin() {
  const {superadmin}=useAuthContext()
  console.log(7538541,superadmin)
  return (
    <fragments>
        <Routes>
        <Route path='/'  element={!superadmin?<Superlogin/>:<Dashboard/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/getadmin'  element={<Adminview/>}/>
        <Route path='/addadmin'  element={<Adminadd/>}/>
        <Route path='/editadmin/:id'  element={<AdminEdit/>}/>
        <Route path='/singleview/:id'  element={<Individualview/>}/>
       
        <Route path='/showvenuecat'  element={<Venuecat/>}/>
        <Route path='/addvenuecat'  element={<VenuecatAdd/>}/>
       


      
    </Routes>
 
    </fragments>
  )
}

export default Superadmin