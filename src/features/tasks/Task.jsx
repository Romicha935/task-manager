import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../../components/TaskItem'

const Tasks = () => {
    const tasks = useSelector((state)=> state.tasks.tasks)
    
    if(!tasks || tasks.length ===0 ) {
        return <div className='text-gray-500'>No tasks added</div>
    }
  return (
    <div>
      {tasks.map((task)=> (
        <TaskItem key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default Tasks