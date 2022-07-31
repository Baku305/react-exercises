
import { useEffect } from "react";
import { useState } from "react";


export function GithubUserList({ usernameList }) {


  const [data, setData] = useState([]);
  const [error,setError] = useState([])
  const [status,setStatus] = useState("")

  const getUser = async (username) => {

   try {
    const fetchUser = `https://api.github.com/users/${username}`;
  
    const fetching = await fetch(fetchUser);

    setStatus(fetching.status)

  
    const json = await fetching.json();
   
    setData((d) => [...d,json])

   } catch (error) {
    setError(error)
    setData(null)
   }
  };

  useEffect(()=>{

    usernameList.forEach((user) => {getUser(user)}) 

  },[usernameList])


  return (
    <>
    {status === 200 ? data.forEach(d => <h1>{d.name}</h1>) : data.forEach(d => <h1>{d.message}</h1>)}
    </>
  );
}
