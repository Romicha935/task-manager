import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'

function App() {


  return (
    <div className='min-h-screen bg-gray-50 flex items-start justify-center p-6'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Tsks Manager</h1>
        <AddTask/>
      </div>
    </div>
  )
}

export default App
