import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtasks } from '../features/tasks/tasksSlice'

const AddTask = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    const handleAdd = ()=> {
       if(text.trim()){
        dispatch(addtasks(text))
        setText("")
       }
    }
  return (
    <div className='flex gap-2 mb-4'>
       <input value={text}
         onChange={(e)=> setText(e.target.value)}
       type="text" placeholder='Enter a task'  className='border rounded px-3  py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400' />
       <button onClick={handleAdd} className='bg-blue-400 text-white rounded px-4 py-2 cursor-pointer hover:bg-blue-700'>Add</button>
    </div>
  )
}

export default AddTask