import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table';
import TaskContainer from './components/TaskContainer';

function App() {

  return (
    <>
      <div>
        <TaskContainer/>
      </div>
    </>
  )
}

export default App
