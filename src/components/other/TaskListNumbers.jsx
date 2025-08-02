// import React from "react";


// const  TaskListNumbers =({data})=>{
//   return (
//     <div className="flex mt-10 justify-between gap-5 screen"> 
//         <div className="w-[45%] px-9 py-6 bg-red-400 rounded-xl" >
//             <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
//             <h3 className="text-xl font-medium">New task</h3>
//         </div>

//         <div className="w-[45%] px-9 py-6 bg-blue-400 rounded-xl" >
//             <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
//             <h3 className="text-xl font-medium">New task</h3>
//         </div>

//         <div className="w-[45%] px-9 py-6 bg-green-400 rounded-xl" >
//             <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
//             <h3 className="text-xl font-medium">New task</h3>
//         </div>

//         <div className="w-[45%] px-9 py-6 bg-yellow-400 rounded-xl" >
//             <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
//             <h3 className="text-xl font-medium">New task</h3>
//         </div>

//     </div>
//   )
// }
// export default  TaskListNumbers



const TaskListNumbers = ({ data }) => {
  if (!data) return null;

  const { taskCounts } = data;

  return (
    <div className="w-full flex justify-between items-center border-8 border-blue-400 p-5 rounded-2xl mb-8 text-2xl">
      <h2 className="!text-yellow-400">Active: {taskCounts.active}</h2>
      <h2 className="!text-blue-400">New: {taskCounts.newTask}</h2>
      <h2 className="!text-green-400">Completed: {taskCounts.completed}</h2>
      <h2 className="!text-red-500">Failed: {taskCounts.failed}</h2>
    </div>
  );
};

export default  TaskListNumbers