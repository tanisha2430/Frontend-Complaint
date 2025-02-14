// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { GrUserAdmin } from "react-icons/gr";
// import { FaRegUser } from "react-icons/fa";

// function UserAdminPage() {
//   return (
//     <div>
//       <div className="bg-gradient-to-r from-red-50 to-red-300 bg-cover bg-no-repeat p-10 flex items-center justify-center flex-col h-screen  ">
//       <h1 className='text-4xl font-extrabold text-pink-950 mb-' >What best defines you ?</h1>
//       <div className='flex flex-col md:flex-row p-2 items-center justify-center mt-20 '>
        
//       <div className='flex gap-20 flex-wrap items-center justify-center'>
//         <NavLink to='/admin'>
//         <button type="button" className="bg-gradient-to-r h-64 w-64 from-pink-950 to-pink-500 p-20 rounded-full text-white font-bold text-[25px] border-4"><GrUserAdmin className='text-center h-20 w-20' />
//             ADMIN
//           </button>
//         </NavLink>
//         <NavLink to='/user'>
//           <button type="button" className="bg-gradient-to-r h-64 w-64 from-pink-950 to-pink-500 p-20 rounded-full text-white font-bold text-[25px] border-4"><FaRegUser className='text-center h-20 w-20' />
//             USER
//           </button>
//         </NavLink>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default UserAdminPage;


import React from "react";
import { NavLink } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

function UserAdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-50 to-red-300 p-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-pink-950 text-center mb-10">
        What best defines you?
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center w-full">
        {/* Admin Button */}
        <NavLink to="/admin">
          <button className="bg-gradient-to-r from-pink-950 to-pink-500 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 flex flex-col items-center justify-center rounded-full text-white font-bold text-lg sm:text-xl md:text-2xl border-4 shadow-lg hover:scale-105 transition-transform">
            <GrUserAdmin className="h-16 w-16 sm:h-20 sm:w-20 mb-2" />
            ADMIN
          </button>
        </NavLink>

        {/* User Button */}
        <NavLink to="/user">
          <button className="bg-gradient-to-r from-pink-950 to-pink-500 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 flex flex-col items-center justify-center rounded-full text-white font-bold text-lg sm:text-xl md:text-2xl border-4 shadow-lg hover:scale-105 transition-transform">
            <FaRegUser className="h-16 w-16 sm:h-20 sm:w-20 mb-2" />
            USER
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default UserAdminPage;

