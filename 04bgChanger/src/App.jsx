import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'red', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('red')}
          >Red</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'green', cursor:'pointer'}}
            onClick={() => setColor('green')}
          >Green</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'blue', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('blue')}
          >Blue</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'olive', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('olive')}
          >Olive</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'gray', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('gray')}
          >Gray</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'yellow', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('yellow')}
          >Yellow</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'pink', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('pink')}
          >Pink</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'purple', cursor:'pointer', cursor:'pointer'}}
            onClick={() => setColor('purple')}
          >Purple</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'lavender', cursor:'pointer'}}
            onClick={() => setColor('lavender')}
          >Lavender</button>
          <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{backgroundColor: 'white', cursor:'pointer'}}
            onClick={() => setColor('white')}
          >White</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{backgroundColor: 'black', cursor:'pointer'}}
            onClick={() => setColor('black')}
          >Black</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
