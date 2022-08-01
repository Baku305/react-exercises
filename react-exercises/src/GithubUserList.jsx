import { useEffect } from "react";
import { useState } from "react";
import { GithubUser } from "./GithubUser";
import Login from "./Login";

export function GithubUserList() {

  const [inputValue, setInputValue] = useState("")

  const handlerInputUsername = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearchUsername = () => {
    setUserNameList((list)=>[...list,inputValue])
  }

  const [userNameList, setUserNameList] = useState([])

  const handleDeleteUsername = () => {
   const inputValue = userNameList.find(inputValue => inputValue)
   console.log(inputValue);
  }



  return (
    <>
      <div className="userListContainer">
        <div className="userListInputContainer">
          <h4>USERNAME LIST MAKER</h4>
          <h5>insert username to add in your list</h5>
          <input type="text" className="userListInput" onChange={handlerInputUsername} />
          <button className="userListInputButton" onClick={handleSearchUsername}>SEARCH</button>
          <button className="usernameDeleteButton" onClick={handleDeleteUsername}>DELETE</button> 
        </div>
        <div>
          <h4>USERNAME LIST</h4>
        {userNameList.map((username, index) => {
           return(<GithubUser key = {index} username={username}/>)
        })}
        </div>
      </div>
    </>
  );
}
