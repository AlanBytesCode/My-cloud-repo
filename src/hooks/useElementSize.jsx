import { useState, useEffect } from 'react'

//provide the useRef (ref) to the element of which, width and height are required.
//returns, size.width and size.height
export default function useElementSize(ref) {
   
   const [size, setSize] = useState({width: 0, height: 0})
   
   useEffect(() => {
      const foo = () => {
         let w = window.getComputedStyle(ref.current, null).getPropertyValue('width')
         let h = window.getComputedStyle(ref.current, null).getPropertyValue('height')
         setSize( {width: w, height: h} )
      }
      window.addEventListener('resize', foo)
      
     return () => {
        window.removeEventListener('resize', foo)
     }
   }, [])
   return size
}