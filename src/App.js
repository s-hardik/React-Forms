import React, {useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: username, age:userage, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users ={usersList}></UserList>
    </div>
  );
}

export default App;
