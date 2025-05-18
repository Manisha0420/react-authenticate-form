import {useContext } from "react";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import User from "./Components/User";
import { usercontext } from "./Context/UserContext";

function App() {
  const {toggler} = useContext(usercontext)

  return (
    <>
      <div
        className=" w-screen h-screen text-white p-10 flex  justify-center items-center bg-[url(https://images.unsplash.com/photo-1737465241596-75175b911799?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-no-repeat bg-cover
"
      >
        <div className=" w-[50%] w-full w-screen  ">
          {toggler ? ( <Signup/>) : ( <Signin /> )}
        </div>
        <User/>
      </div>
    </>
  );
}

export default App;
