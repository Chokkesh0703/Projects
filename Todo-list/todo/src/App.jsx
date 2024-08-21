import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


function App() {
  const [todo, SetTodo] = useState('')
  const [todos, SetTodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      SetTodos(todos)
    }
    
  }, [])
  
  
  const saveTols =(params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }

  const toggleFinished = (e) =>{
    setshowfinished(!setshowfinished)

  }
  



  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    SetTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
   
    SetTodos(newTodos)
    saveTols()

  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    SetTodos(newTodos)
    saveTols()


  }

  const handleAdd = () => {
    SetTodos([...todos, {id:uuidv4(), todo, isCompleted: false}])
    SetTodo('')
    saveTols()

  }

  const handlechange = (e) => {
    SetTodo(e.target.value)
    

  }
  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id 
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    SetTodos(newTodos)
    saveTols()
  }
  



  return (
    <>
      <Navbar />
      <div className=' mx-3  md:container md:mx-auto bg-violet-300 my-5 p-5 rounded-xl min-h-[80vh] md:w-[35%]' >
      <h1 className='font-bold text-center text-3xl'>C-Task - Manage your todos at one place</h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h1 className='text-2xl font-bold '> Add a Todo</h1>
          <div className="flex">
          <input type="text" onChange={handlechange} value={todo} className='w-full rounded-full px-5 py-1' />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-gray-600 hover:bg-gray-800 p-4 py-2 text-sm font-bold text-white rounded-full mx-2 ' >Add</button>
          </div>
        </div>
        <input onChange={toggleFinished} type="checkbox" name="" id="" checked={showfinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className="h-[1px] bg-black opacity-25 w-[90%] my-2  mx-auto "> </div>
        <h2 className='text-2xl font-bold'>Your Task </h2>
        <div className="todos ">
          {todos.length === 0 && <div className='m-5'> No Todo to Display</div>}
          {todos.map(item => {


            return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex  my-3 justify-between">
              <div className='flex gap-5 '>
              <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={item.isCompleted} />
              <div className={item.isCompleted?"line-through":""}> {item.todo} </div>
              </div>
              <div className="buttons flex h-full m-2">
                <button onClick= {(e)=>{handleEdit(e, item.id)}} className='bg-gray-600 hover:bg-gray-800 p-2 py-1 font-bold text-sm text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete( e, item.id)}} className='bg-gray-600 hover:bg-gray-800 p-2 py-1 text-sm  font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>

    </>
  )
}

export default App
