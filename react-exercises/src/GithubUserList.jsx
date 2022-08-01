import { useEffect } from "react";
import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {

  const [inputValue, setInputValue] = useState("")

  const handlerInputUsername = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearchUsername = () => {
    setUserNameList((list)=>[...list,inputValue])
  }

  const [userNameList, setUserNameList] = useState([])

  const handleDeleteUsername() => {
    setInputValue((i) => i.find((el) => {
      const elToSlice = el.
    }))
  }



  return (
    <>
      <div className="userListContainer">
        <div className="userListInputContainer">
          <h4>USERNAME LIST MAKER</h4>
          <h5>insert username to add in your list</h5>
          <input type="text" className="userListInput" onChange={handlerInputUsername} />
          <button className="userListInputButton" onClick={handleSearchUsername}>SEARCH</button>
          <button className="usernameDeleteButton" onClick={{handleDeleteUsername}}></button> 
        </div>
        <div>
          <h4>USERNAME LIST</h4>
        {userNameList.map((username) => {
           return(<GithubUser username={username}/>)
        })}
        </div>
      </div>
    </>
  );
}
