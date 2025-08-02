import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask(){

    const [userData,setUserData] = useContext(AuthContext)

    
    return(

        <div className="bg-[#1c1c1c] p-5 rounded mt-5 ">
             <div className="bg-red-400 py-2 px-4 flex mb-2 justify-between rounded">
                <h2 className="font-medium text-lg w-1/5 ">Employee Name</h2>
                <h3 className="font-medium text-lg w-1/5 ">New Task</h3>
                <h3 className="font-medium text-lg w-1/5 ">Active Task</h3>
                <h5 className="font-medium text-lg w-1/5 ">Completed</h5>
                <h5 className="font-medium text-lg w-1/5 ">Failed</h5>

            </div>
        <div className="h-[80%] ">
                {userData.map(function(elem,idx){
                return(
                <div  key={idx} className="bg-[#1c1c1c] border-2 border-emerald-600 py-2 px-4 flex mb-2 justify-between rounded">
                <h2 className="w-1/5 font-medium text-lg">{elem.firstName}</h2>
                <h3 className="w-1/5 font-medium text-lg !text-blue-400 px-3 py-1  ">{elem.taskCounts.newTask}</h3>
                <h5 className="w-1/5 font-medium text-lg !text-yellow-400 px-3 py-1  ">{elem.taskCounts.active}</h5>
                <h5 className="w-1/5 font-medium text-lg !text-white-600 px-3 py-1  ">{elem.taskCounts.completed}</h5>
                <h3 className="w-1/5 font-medium text-lg !text-red-400 px-3 py-1  ">{elem.taskCounts.failed}</h3>


            </div>
                )
            }
            )}
        </div>
           

            {/* <div className="bg-green-400 py-2 px-4 flex mb-2 justify-between rounded">
                <h2>Sarthak</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className="bg-yellow-400 py-2 px-4 flex mb-2 justify-between rounded">
                <h2>Sarthak</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className="bg-blue-400 py-2 px-4 flex mb-2 justify-between rounded">
                <h2>Sarthak</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>

            <div className="bg-purple-400 py-2 px-4 flex mb-2 justify-between rounded">
                <h2>Sarthak</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div> */}
        </div>
    )
}
export default AllTask