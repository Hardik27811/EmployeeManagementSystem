// import React from "react";
// import AcceptTask from "./AcceptTask";
// import NewTask from "./NewTask";
// import CompleteTask from "./CompleteTask";
// import FailedTask from "./FailedTask";


// const TaskList =({data})=>{
//   return (
//         <div className="h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5 mt-10">
//             {/* <div className=" flex-shrink-0 h-full w-[340px] bg-red-400 p-5 rounded-xl">
//                 <div className="flex justify-between items-center">
//                     <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
//                     <h4>20 feb 2024</h4>
//                     <h2 className="mt-5 text-xl font-semibold  ">Make a YouTube Video</h2>
//                     <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim urna eu sagittis fringilla. Duis eleifend, orci eu pharetra blandit, augue arcu viverra leo, </p>
//                 </div>
//             </div> */}
//             {/* <AcceptTask/>
//             <NewTask/>
//             <CompleteTask/>
//             <FailedTask/> */}

//             {data.tasks.map((elem ,idx)=>{
//                 if(elem.active){
//                     return <AcceptTask key={idx} data={elem}/>
//                 }
//                 if(elem.newTask){
//                     return <NewTask key={idx} data={elem}/>
//                 }
//                 if(elem.completed){
//                     return <CompleteTask key={idx} data={elem}/>
//                 }
//                 if(elem.failed){
//                     return <FailedTask key={idx} data={elem}/>
//                 }
//             })}
            
//         </div>

//   )
// }
// export default TaskList




import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  if (!data) return null;

  const updateTaskStatus = (taskIndex, newStatus) => {
    const updatedTasks = data.tasks.map((task, idx) => {
      if (idx === taskIndex) {
        return {
          ...task,
          active: newStatus === "active",
          newTask: false,
          completed: newStatus === "completed",
          failed: newStatus === "failed",
        };
      }
      return task;
    });

    const updatedEmployee = {
      ...data,
      tasks: updatedTasks,
      taskCounts: {
        active: updatedTasks.filter(t => t.active).length,
        newTask: updatedTasks.filter(t => t.newTask).length,
        completed: updatedTasks.filter(t => t.completed).length,
        failed: updatedTasks.filter(t => t.failed).length,
      }
    };

    const updatedEmployees = userData.map(emp =>
      emp.id === data.id ? updatedEmployee : emp
    );

    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.tasks.map((task, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105
            ${task.completed ? "bg-green-600" : task.failed ? "bg-red-600" : task.active ? "bg-yellow-500" : "bg-blue-600"}
            text-white`}
        >
          <h3 className="text-xl font-bold mb-2">{task.taskTitle}</h3>
          <p className="mb-2">{task.taskDescription}</p>
          <p className="text-sm mb-4">Due: {task.taskDate}</p>
          <p className="text-sm mb-4">Category: {task.category}</p>
          <div className="flex gap-2">
            <button
              onClick={() => updateTaskStatus(idx, "active")}
              className="bg-yellow-700 px-3 py-1 rounded hover:bg-yellow-800"
            >
              Mark Active
            </button>
            <button
              onClick={() => updateTaskStatus(idx, "completed")}
              className="bg-green-700 px-3 py-1 rounded hover:bg-green-800"
            >
              Mark Completed
            </button>
            <button
              onClick={() => updateTaskStatus(idx, "failed")}
              className="bg-red-700 px-3 py-1 rounded hover:bg-red-800"
            >
              Mark Failed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
