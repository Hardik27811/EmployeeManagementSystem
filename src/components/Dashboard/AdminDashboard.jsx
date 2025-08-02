// import React from "react";
// import Header from "../other/Header";
// import CreateTask from "../other/CreateTask";
// import AllTask from "../other/AllTask";


// const AdminDashboard =(props)=>{
//   return (
//     <div className="h-screen w-full p-10 ">
//         <Header changeUser={props.changeUser}/>
//        <CreateTask/>
//        <AllTask/>
//     </div>
//   )
// }
// export default AdminDashboard


import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  const addTaskToEmployee = (employeeId) => {
    if (!taskTitle || !taskDescription) {
      alert("Please enter task title and description");
      return;
    }

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate: new Date().toISOString().split("T")[0],
      category: "Admin Added",
    };

    const updatedEmployees = userData.map((emp) =>
      emp.id === employeeId
        ? {
            ...emp,
            tasks: [...emp.tasks, newTask],
            taskCounts: {
              ...emp.taskCounts,
              active: emp.taskCounts.active + 1,
              newTask: emp.taskCounts.newTask + 1,
            },
          }
        : emp
    );

    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setTaskTitle("");
    setTaskDescription("");
  };

  const addNewEmployee = () => {
    if (!newName || !newEmail || !newPassword) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      firstName: newName,
      email: newEmail,
      password: newPassword,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    };

    const updatedEmployees = [...userData, newEmployee];
    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setNewName("");
    setNewEmail("");
    setNewPassword("");
  };

  const addNewAdmin = () => {
    if (!newAdminEmail || !newAdminPassword) {
      alert("Please fill all admin fields");
      return;
    }

    const admins = JSON.parse(localStorage.getItem("admin")) || [];
    const newAdmin = {
      id: Date.now(),
      email: newAdminEmail,
      password: newAdminPassword,
    };

    const updatedAdmins = [...admins, newAdmin];
    localStorage.setItem("admin", JSON.stringify(updatedAdmins));

    alert(`New admin ${newAdminEmail} added!`);

    setNewAdminEmail("");
    setNewAdminPassword("");
  };

  return (
    <div className="relative p-10 bg-gray-900 text-white min-h-screen">
      {/* Logout top-right */}
      <button
        className="absolute top-4 right-4 border-red-600 text-white px-10 py-3 rounded-2xl mt-3 text-xl"
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          changeUser(null);
        }}
      >
        Logout
      </button>

      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      {/* Task input */}
      <div className="mb-6">
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-emerald-400"
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-emerald-400"
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>

      {/* Add new employee */}
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Add New Employee</h2>
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-blue-400"
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-blue-400"
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-blue-400"
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addNewEmployee}
        >
          Add Employee
        </button>
      </div>

      {/* Add new admin */}
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Add New Admin</h2>
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-purple-400"
          type="email"
          placeholder="Admin Email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
        />
        <input
          className="text-black px-3 py-2 rounded mr-2 border-4 border-purple-400"
          type="password"
          placeholder="Admin Password"
          value={newAdminPassword}
          onChange={(e) => setNewAdminPassword(e.target.value)}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={addNewAdmin}
        >
          Add Admin
        </button>
      </div>

      {/* Employees list */}
      <div className="space-y-6">
        {userData?.map((emp) => (
          <div key={emp.id} className="border p-4 rounded bg-gray-800">
            <h2 className="text-xl mb-2">
              {emp.firstName} ({emp.email})
            </h2>

            {/* Live status */}
            <div className="mb-4 flex gap-4">
              <span className="bg-yellow-600 px-3 py-1 rounded">
                Active: {emp.taskCounts.active}
              </span>
              <span className="bg-green-600 px-3 py-1 rounded">
                Completed: {emp.taskCounts.completed}
              </span>
              <span className="bg-red-600 px-3 py-1 rounded">
                Failed: {emp.taskCounts.failed}
              </span>
              <span className="bg-blue-600 px-3 py-1 rounded">
                New: {emp.taskCounts.newTask}
              </span>
            </div>

            <p className="mb-2 font-bold">Tasks:</p>
            <ul className="list-disc list-inside mb-2">
              {emp.tasks.map((task, idx) => (
                <li key={idx}>
                  {task.taskTitle} - {task.taskDescription} ({task.category})
                </li>
              ))}
            </ul>

            <button
              className="bg-emerald-600 text-white px-4 py-2 rounded"
              onClick={() => addTaskToEmployee(emp.id)}
            >
              Add Task To {emp.firstName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
