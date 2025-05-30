import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usercontext } from "../Context/UserContext";

const Signin = () => {
  const { toggler, setToggler, users, setUsers } = useContext(usercontext);

  const {
    register, //variable hota hai jo store krta h data
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const submithandler = (data) => {
    console.log(data);
    data.id = nanoid();

    const copyusers = [...users];
    copyusers.push(data);
    setUsers(copyusers);

    const isPresent = users.find(
      (users) => users.email === data.email && users.password === data.password
    );
    if (isPresent) {
      toast.success("User Already Exists!");
    } else {
      toast.error("User Not Found!");
    }

    reset();
  };
  return (
    <div className="w-[100%] flex justify-between   rounded-2xl p-5 rounded-2xl">
      <div className="w-[50%]  bg-[url(https://plus.unsplash.com/premium_photo-1744193093495-11f35004a2b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8)] bg-no-repeat  bg-center  text-center p-30  text-black ">
        <h2 className="text-4xl font-bold  ">Sign In to Continue</h2>
        <p className="font-semibold">Lorem ipsum dolor sit amet</p>
      </div>

      <form
        onSubmit={handleSubmit(submithandler)}
        className="w-[50%]  bg-[#FFFFFF]  p-12 flex flex-col gap-4 items-center text-black "
      >
        <h1 className="text-3xl font-bold">LOG IN</h1>

        <div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="abc@123gmail.com"
            className="border black p-2 w-full outline-none rounded"
          />
          {errors.email && <p className="text-red-400">Email is required</p>}
        </div>

        <div>
          <input
          {...register("password",{required:true,minLength:6})}
          type="password"
          placeholder="********"
          className="border black p-2 w-full outline-none rounded"
        />
        {errors.password?.type==="required" && <p className="text-red-400">Password is required</p>}
        {errors.password?.type==='minLength'&& <p className="text-red-400">Atleast 6 charater required</p>}
        </div>

        <button className=" bg-gray-600 w-[40%] py-2 rounded-lg  hover:bg-black text-white">
          LOG IN
        </button>
        <small className="text-center">
          Already have an account?
          <button
            disabled={isValid}
            type="button"
            className="text-blue-700"
            onClick={() => setToggler(!toggler)}
          >
            Register
          </button>
        </small>
      </form>
    </div>
  );
};

export default Signin;
