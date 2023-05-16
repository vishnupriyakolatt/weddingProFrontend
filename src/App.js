import {BrowserRouter,Routes,Route}from "react-router-dom";
import './App.css';
import Superadmin from "./routes/Superadmin";
import Admin from "./routes/Admin";
import User from "./routes/User";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

return(
    <>
    
    <BrowserRouter>
    <Routes>
         <Route path="/superadmin/*" element={<Superadmin />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<User />} />
        </Routes>
    
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

    </BrowserRouter>
    </>
)
}

export default App;
