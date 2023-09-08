import React, { useState } from 'react'

const Todo = () => {
    const [task,setTask]=useState("")
    const [taskArr,setTaskArr]=useState([])
    

    const handleInput=(e)=>{
        setTask(e.target.value)
    }
    const handleAddTask=()=>{
        if(task!==""){
        setTaskArr([...taskArr,task])
        setTask("")
        }
    }

    const handleRemove=(index)=>{
const newTaskArr=[...taskArr]
newTaskArr.splice(index,1)
setTaskArr(newTaskArr)
    }
  return (
    <div className='container'>
    <div>
        <h1>Todo List</h1>
        <input type="text" value={task} onChange={handleInput} />
        <button onClick={handleAddTask}>Add Task</button>
    </div>
<br />
<br />
    {taskArr.length===0 ? (
  <p>No tasks added yet!</p>
    ):(
        taskArr.map((e,index)=>{
            return (
                <div className='tasklist' key={index}>
                    {e}
                    
                <button className='removebtn' onClick={()=>handleRemove(index)}>Remove</button>
                </div>
            )
        })
    )}
    </div>
  )
}

export default Todo