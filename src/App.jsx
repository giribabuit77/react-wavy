import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex items-center justify-center text-sky-500'>
        React-Tailwind
      </div>
    </>
  )
}

export default App
