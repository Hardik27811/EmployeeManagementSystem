// // import React from "react";
// // import Header from "../other/Header";
// // import TaskListNumbers from "../other/TaskListNumbers";
// // import TaskList from "../../TaskList/TaskList";
// // const EmployeeDashboard =(props)=>{
// //   // console.log(data);
  
// //   return (
// //     <div className="p-10 bg-[#1C1C1C] h-screen">
// //         <Header changeUser={props.changeUser} data={props.data}  />
// //         <TaskListNumbers data={props.data}/>
// //         <TaskList data={props.data} />
// //     </div>
// //   )
// // }
// // export default EmployeeDashboard




// import React from "react";
// import Header from "../other/Header";
// import TaskListNumbers from "../other/TaskListNumbers";
// import TaskList from "../../TaskList/TaskList";

// const EmployeeDashboard = ({ changeUser, data }) => {
//   if (!data) {
//     return (
//       <div className="p-10 bg-[#1C1C1C] text-white h-screen flex justify-center items-center">
//         <h2>Loading Employee Data...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 bg-[#1C1C1C] h-screen text-white">
//       <Header changeUser={changeUser} data={data} />
//       <TaskListNumbers data={data} />
//       <TaskList data={data} />
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => {
  console.log("EmployeeDashboard Data:", data);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#1C1C1C] text-white">
        <h2>Loading Employee Data...</h2>
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#1C1C1C] text-white min-h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
