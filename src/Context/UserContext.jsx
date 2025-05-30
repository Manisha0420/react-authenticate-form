import { createContext,useState } from "react";


export const usercontext = createContext(null);

const UserContext = (props)=>{
          const[toggler , setToggler]=useState(true)
          const[users,setUsers]=useState([])

          return(
                    <usercontext.Provider value={{toggler ,setToggler ,users,setUsers}}>
                              {props.children}
                    </usercontext.Provider>
          )
}

export default UserContext;