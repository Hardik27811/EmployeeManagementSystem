// import React, { useState } from "react";
// import { setLocalStorage } from "../../utils/localStorage";

// const Header =(props)=>{
//   // console.log(data);
//   // const[username, setUsername]= useState('')
//   // if(!data){
//   //   setUsername('Admin')
//   // }
//   // else{
//   //   setUsername(data.firstName)
//   // }

//   const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
//   }
  
//   return (
//    <div>
//         <div className="flex items-end justify-between">
//             <h1 className="text-2xl font-medium">Hello <br/> <span className="text-3xl font-semibold" >username 👋</span> </h1>
//             <button onClick={logOutUser} className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
//         </div>
//    </div>
//   )
// }
// export default Header


const Header = ({ changeUser, data }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-2xl border-4 border-emerald-400 bg-transparent rounded-2xl p-3">Hello , {data?.firstName || 'User'} 👋</h2>
      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          changeUser(null);
        }}
        className="px-4 py-2 border-4 border-red-600 rounded-xl !text-red-400"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
