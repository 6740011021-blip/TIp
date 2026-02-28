"use client"
import { useEffect,useState} from "react"



const Todo = ()=>{
const [todo,setTodo] = useState([])
const url ="https://jsonplaceholder.typicode.com/todos"

useEffect(()=>{
const fetchtodos = async() =>{
    const res =  await fetch(url);
    const data = await res.json()
    console.log(data)
    setTodo(data);
};
fetchtodos();
},[]);

return(
    <ul>
{todo.map((todo)=>(<li key={todo.id}>{todo.name}</li>))}
    </ul>
    )
}




const User = ()=>{
const [users,setUsers] = useState([])
const url ="https://jsonplaceholder.typicode.com/users"

useEffect(()=>{
const fetchUser = async() =>{
    const res =  await fetch(url);
    const data = await res.json()
    console.log(data)
    setUsers(data);
};
fetchUser();
},[]);

return(
    <ul>
{users.map((User)=>(<li key={User.id}>{User.name}</li>))}
    </ul>
    )
}

const UserPage = () => {
  return (
    <>
    <User></User>
    <Todo></Todo>
    </>
  )
}
export default UserPage