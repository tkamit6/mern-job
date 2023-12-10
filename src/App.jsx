import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

const data = [1, 3, 4, 33, 22, 56]
function App() {

  // function sum(...numbers) {
  //   let result = 0;

  //   for (let number of numbers) {
  //     result += number;
  //   }
  //   return result;
  // }
  // console.log(sum(1, 2, 3, 4));

  return (
    <div className=''>
      <Navbar />
      <Outlet />

    </div>
  )
}

export default App
