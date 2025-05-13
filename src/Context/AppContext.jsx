import { createContext, useEffect, useState } from "react";
import { assets, jobsData } from "../assets/assets";

export const AppContext = createContext();

   
export const AppContextProvider = (props) => {

    const [searchFilter, setserchFilter] = useState({
        title:'',
        location:'',
    })
   

      const [isSearch,setisSearch]=useState(false)

      const [jobs ,setjobs]=useState([])

      const[showRecuiterLogin,setshowRecuiterLogin]=useState(false)

         //funtion to fetch jobs

      const fetchjob= async ()=>{
       setjobs(jobsData)
      }
      useEffect(()=>{
          fetchjob()
      },[])

    const value = {
        searchFilter,setserchFilter, isSearch,setisSearch,jobs,setjobs,showRecuiterLogin,setshowRecuiterLogin
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};