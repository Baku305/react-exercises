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



  return (
    <>
      <div className="userListContainer">
        <div className="userListInputContainer">
          <input type="text" className="userListInput" onChange={handlerInputUsername} />
          <button className="userListInputButton" onClick={handleSearchUsername}>SEARCH</button>
        </div>
        <div>
        {userNameList.map((username) => {
          /**return */
          (<GithubUser username={username}/>)
        })}
        </div>
      </div>
    </>
  );
}
