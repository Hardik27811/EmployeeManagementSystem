// import React, { useState } from "react";

// const Login =({handleLogin})=>{
//     //two way binding

//     const [email,setEmail]= useState('')
//     const [password,setPassword] =useState('')
//     const submitHandler=(e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setEmail('')
//         setPassword('')
//     }
//   return (
//     <div className="flex  h-screen w-screen items-center justify-center">
//         <div className="border-2 rounded-xl  border-emerald-600 p-23">
//             <form  onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className="flex  flex-col items-center justify-center">
//                 <input
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 className=" required outline-none bg-transparent border-2 border-emerald-600 text-xl py-5 px-8 rounded-full placeholder:text-gray-400 " type="email" placeholder="Enter Email" />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value);
//                 }}
//                 className=" required outline-none bg-transparent border-2 border-emerald-600 text-xl py-5 px-8 rounded-full placeholder:text-gray-400  mt-5" type="text" placeholder="Enter Password" />
//                 <button className="text-white outline-none  mt-8  bg-emerald-600 text-xl py-5 px-30 rounded-full " >Log In</button>
//             </form>

//         </div>
//     </div>
//   )
// }
// export default Login



import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Login = ({ handleLogin, handleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showSignUp, setShowSignUp] = useState(false);

  // Refs for GSAP
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const signUpRef = useRef(null);

  useEffect(() => {
    // Initial fade + slide
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (showSignUp) {
      gsap.to(signUpRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      gsap.to(signUpRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, [showSignUp]);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (newName && newEmail && newPassword) {
      handleSignUp(newName, newEmail, newPassword);
      setNewName("");
      setNewEmail("");
      setNewPassword("");
      setShowSignUp(false);
    } else {
      alert("Please fill all sign up fields!");
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-600"
    >
      <div
        ref={formRef}
        className="border-4 border-white/30 rounded-2xl bg-white/10 backdrop-blur-md p-10 shadow-xl w-96"
      >
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-3xl mb-6 font-bold tracking-wider">
            Welcome Back 👋
          </h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none bg-white/20 text-white placeholder:text-white/70 border-2 border-white/30 text-lg py-4 px-6 rounded-full mb-4 focus:ring-2 focus:ring-white"
            type="email"
            placeholder="Enter Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-white/20 text-white placeholder:text-white/70 border-2 border-white/30 text-lg py-4 px-6 rounded-full mb-6 focus:ring-2 focus:ring-white"
            type="password"
            placeholder="Enter Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-emerald-600 text-lg py-4 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 mb-4"
          >
            Log In
          </button>

          <button
            type="button"
            onClick={() => setShowSignUp(!showSignUp)}
            className="text-white underline hover:text-emerald-200 transition"
          >
            {showSignUp ? "Cancel Create Account" : "Create New Account"}
          </button>
        </form>

        {/* Create Account form */}
        <div
          ref={signUpRef}
          className="overflow-hidden mt-6"
          style={{ height: 0, opacity: 0 }}
        >
          <form
            onSubmit={signUpHandler}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full outline-none bg-white/20 text-white placeholder:text-white/70 border-2 border-white/30 text-lg py-4 px-6 rounded-full mb-4 focus:ring-2 focus:ring-white"
              type="text"
              placeholder="Full Name"
            />
            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full outline-none bg-white/20 text-white placeholder:text-white/70 border-2 border-white/30 text-lg py-4 px-6 rounded-full mb-4 focus:ring-2 focus:ring-white"
              type="email"
              placeholder="Email"
            />
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full outline-none bg-white/20 text-white placeholder:text-white/70 border-2 border-white/30 text-lg py-4 px-6 rounded-full mb-4 focus:ring-2 focus:ring-white"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-blue-600 text-lg py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
