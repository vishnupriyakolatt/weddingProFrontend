import React from "react";
import Header from "../../Component/Header";
import decor from "../../assets/decor.jpg";
import photograph from "../../assets/testimonial.jpg";
import venue from "../../assets/venue.jpg";
import { Link } from "react-router-dom";
function Bookpage() {
  return (
    <>
      <div className="mx-auto items-center ">
        <Header />
       
        <div className="fixed top-0 left-0 right-0 z-10">
     
          <div className="w-full relative flex items-center justify-center">
   
            <div className="w-full h-full overflow-x-hidden flex justify-center items-center overflow-y-hidden mx-auto">
            
              <div
                id="slider"
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out mt-60 duration-700"
              >
                  
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                  <img
                    src={photograph}
                    alt="black chair and white table"
                    className="object-cover object-center w-80 h-full"
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900"></h2>
                    <div className="flex h-full items-end pb-6">
                    <Link to='/photo'><h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                        Photography
                      </h3></Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                 <img
                    src={decor}
                    alt="sitting area"
                    className="object-cover object-center w-80"
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900"></h2>
                    <div className="flex h-full items-end pb-6">
                     <Link to='/Decor'><h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                        Decoration
                      </h3></Link> 
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                    src={venue}
                    alt="sitting area"
                    className="object-cover object-center w-80"
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900"></h2>
                    <div className="flex h-full items-end pb-6">
                    <Link to='/venue'>  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                        Venue
                      </h3></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookpage;
