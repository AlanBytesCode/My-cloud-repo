import { useState, useEffect, useRef } from 'react'
export default function Gallery() {
   
   const [info, setInfo] = useState( )
   const [condition, setCondition] = useState(false)
   
    async function Get(){
      let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await res.json()
      console.log('inn', data )
      
      setCondition( prev => !prev)
      setInfo(data)
   }
   
   
   
   return (
      <div className='GalleryPG
                     h-[150vh]
      '>
         <div>{condition ? Object.entries(info).map((elem, idx) => <div key={idx}>{elem}</div>) : 'Loading'}</div>
         
         <button onClick={()=>{ Get() }} className=' bg-indigo-600 active:bg-amber-500
         
         '>Get Info</button>
      </div>
   )
}