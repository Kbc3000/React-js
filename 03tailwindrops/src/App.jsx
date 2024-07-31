import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kaushik",
    age: 21
  }
  // let newArr = [1, 2, 3]
  let newArr = ['kaushik']
  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind css</h1>
      <Card channel="chai aur code" myArr={newArr}></Card>
      <Card></Card> */}


      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind css</h1>
      <Card username={newArr} btnText='click me'></Card>
      <Card username='hiren' ></Card>

    </>
  )
}

export default App
