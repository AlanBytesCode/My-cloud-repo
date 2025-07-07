import { useRef } from 'react' 
import { useElementSize } from '../../hooks/AllHooksExport'

export default function Home() {
   const elRef = useRef()
   const {width: w, height: h} = useElementSize(elRef)
   
   
   return (
      <div className='HomePG
                     p-2 
                     border border-yellow-500
                     grid 
                     grid-cols-2
                     [&_div]:outline
                     [&_div]:w-[clamp(3rem,20vw,8rem)]
                     [&_div]:h-[clamp(3rem,20vh,8rem)]
                     
      '>
         <div ref={elRef} className='
                        bg-green-300
                        rounded-2xl
                        flex flex-col 
                        justify-center
                        items-center
         '>
         <span>width: {w}</span>
         <span>height: {h}</span>
         </div>
         
         <div className='
                        bg-green-300
                        rounded-2xl
         '>
         2
         </div>
         
         <div className='
                        bg-green-300
                        rounded-2xl
         '>
         3
         </div>
         
         <div className='
                        bg-green-300
                        rounded-2xl
         '>
         4
         </div>
        
         
        
      </div>
   )
}