import React, { useContext } from "react";
import { usercontext } from "../Context/UserContext";

const User = () => {
   const {users ,setUsers}=useContext(usercontext) 

   const deleteHandler = (id) => {
    const copyusers =[...users];      
    const filteredUsers =copyusers.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const userlist = users.map((user) => {
        return (
            <li
                key={user.id}
                className="flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3"
            >
                <p>
                    <span className="block text-3xl mb-1">{user.name}</span>
                    <small className="text-lg">{user.email}</small>
                </p>
                <span
                    onClick={() => deleteHandler(user.id)}
                    className="hover:cursor-pointer font-normal text-red-500"
                >
                    Delete
                </span>
            </li>
        );
    });

    return (
        <ul className="w-[30%]">
            {users.length != 0 ? (
                userlist
            ) : (
                <h1 className=" text-3xl font-thin text-center mt-10 text-red-400">
                    Data Not Found!
                </h1>
            )}
        </ul>
    );

};

export default User;

