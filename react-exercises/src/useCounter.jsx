
import { useEffect } from "react";
import { useState } from "react"


export function UseCounter(amount){
 
 const [count, setCount] = useState(0)

 useEffect(()=>{
  setCount(amount)
 },[amount])

console.log(`count by useCounter:${count}`);

}