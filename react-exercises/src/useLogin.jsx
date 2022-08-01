import { useEffect } from "react";
import { useState } from "react";


export function useLogin(userName,passWord){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
   setUsername(userName)
   setPassword(passWord)
  },[userName,passWord])

  console.log(`you username is: ${username} and you password is ${password}`)

  return {username,password}
}