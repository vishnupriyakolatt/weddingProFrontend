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
import AdminProfile from '../Pages/Admin/AdminProfile';
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
        <Route path='/'  element={<Adminlogin/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/Venueview'  element={<Venuecat/>}/>
        <Route path='/VenueAdd'  element={<VenuecatAdd/>}/>
        <Route path='/customerview'  element={<CustomerView/>}/>
        <Route path='/photographerview'  element={<Photoview/>}/>
        <Route path='/photographeradd'  element={<PhotoAdd/>}/>
        <Route path='/venuecollectadd'  element={<VenuecollectAdd/>}/>
        <Route path='/venueDisplay'  element={<VenueDisplay/>}/>
        <Route path='/Decordisplay'  element={<DecorDisplay/>}/>
        <Route path='/Decoradd'  element={<DecorAdd/>}/>
        <Route path='/venuesingle/:id'  element={<Venuesingle/>}/>
        <Route path='/profile'  element={<AdminProfile/>}/>
        <Route path='/photosingleview/:id'  element={<PhotoSingle/>}/>
        <Route path='/decorsingleview/:id'  element={<Decorsingle/>}/>
        <Route path='/decorEdit/:id'  element={<DecorEdit/>}/>
        <Route path='/photoEdit/:id'  element={<PhotoEdit/>}/>
        <Route path='/venueEdit/:id'  element={<VenueEdit/>}/>
       </Routes>

    </fragments>
  )
}

export default Admin