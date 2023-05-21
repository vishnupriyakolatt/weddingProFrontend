import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import Adminlogin from '../Pages/Admin/Adminlogin';
import Dashboard from '../Pages/Admin/Dashboard';
import { Navigate } from 'react-router-dom';
import Venuecat from '../Pages/Admin/Venuecat';
import VenuecatAdd from '../Pages/Admin/VenuecatAdd';
import CustomerView from '../Pages/Admin/CustomerView';
import Photoview from '../Pages/Admin/Photoview';
import PhotoAdd from '../Pages/Admin/PhotoAdd';

import VenuecollectAdd from '../Pages/Admin/VenuecollectAdd';
import VenueDisplay from '../Pages/Admin/VenueDisplay';
import DecorDisplay from '../Pages/Admin/DecorDisplay';
import DecorAdd from '../Pages/Admin/DecorAdd';
import Venuesingle from '../Pages/Admin/Venuesingle';

import PhotoSingle from '../Pages/Admin/PhotoSingle';
import Decorsingle from '../Pages/Admin/Decorsingle';
import DecorEdit from '../Pages/Admin/DecorEdit';
import PhotoEdit from '../Pages/Admin/PhotoEdit';
import VenueEdit from '../Pages/Admin/VenueEdit';
import { useAuthContext } from '../Hooks/useAuthContext';

function Admin() {
  const {admin}=useAuthContext()
  return (
<fragments>

    <Routes>
        <Route path='/'  element={!admin?<Adminlogin/>:<Dashboard/>}/>
        <Route path='/dashboard'  element={admin?<Dashboard/>:<Adminlogin/>}/>
        <Route path='/Venueview'  element={admin?<Venuecat/>:<Adminlogin/>}/>
        <Route path='/VenueAdd'  element={admin?<VenuecatAdd/>:<Adminlogin/>}/>
        <Route path='/customerview'  element={admin?<CustomerView/>:<Adminlogin/>}/>
        <Route path='/photographerview'  element={admin?<Photoview/>:<Adminlogin/>}/>
        <Route path='/photographeradd'  element={admin?<PhotoAdd/>:<Adminlogin/>}/>
        <Route path='/venuecollectadd'  element={admin?<VenuecollectAdd/>:<Adminlogin/>}/>
        <Route path='/venueDisplay'  element={admin?<VenueDisplay/>:<Adminlogin/>}/>
        <Route path='/Decordisplay'  element={admin?<DecorDisplay/>:<Adminlogin/>}/>
        <Route path='/Decoradd'  element={admin?<DecorAdd/>:<Adminlogin/>}/>
        <Route path='/venuesingle/:id'  element={admin?<Venuesingle/>:<Adminlogin/>}/>
      
        <Route path='/photosingleview/:id'  element={admin?<PhotoSingle/>:<Adminlogin/>}/>
        <Route path='/decorsingleview/:id'  element={admin?<Decorsingle/>:<Adminlogin/>}/>
        <Route path='/decorEdit/:id'  element={admin?<DecorEdit/>:<Adminlogin/>}/>
        <Route path='/photoEdit/:id'  element={admin?<PhotoEdit/>:<Adminlogin/>}/>
        <Route path='/venueEdit/:id'  element={admin?<VenueEdit/>:<Adminlogin/>}/>
       </Routes>

    </fragments>
  )
}

export default Admin