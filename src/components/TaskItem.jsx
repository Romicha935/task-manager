import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTasks, toggleTasks } from '../features/tasks/tasksSlice'

const TaskItem = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div className='flex justify-between items-center p-3 border rounded-md mb-2'>
        <div className='flex items-center gap-3'>
            <input type="checkbox" onChange={()=> dispatch(toggleTasks(task.id))}  checked={task.completed} className='w-4 h-4' />
            <span className={task.completed ? "line-through text-gray-400" : "text-gray-700"}>{task.text}</span>

        </div>
        <button onClick={()=> dispatch(deleteTasks(task.id))} className='text-sm bg-red-500 hover:bg-red-700 cursor-pointer px-4 py-2 rounded text-white'>Delete</button>
    </div>
  )
}

export default TaskItem