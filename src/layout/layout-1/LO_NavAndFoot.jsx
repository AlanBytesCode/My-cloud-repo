import { useState } from 'react'

import { NavBar, Footer } from '../../comp/AllCompExport'
import { Outlet } from 'react-router-dom';

export default function LO_NavAndFoot() {

   const [cond, setCond] = useState(false)
   console.log(cond)
   
   
   
   return (
      <section className='Layout_1
                        outline
                        min-h-screen
                        bg-gray-800
                        grid grid-rows-[auto_1fr_auto]
                        
         '>
         <NavBar infoFromChild={setCond} />
         <div className='Wrapper flex flex-row relative'>
            <div className='outletWrapper p-4 flex-auto'>
               <Outlet />
            </div>
            <div className={`SidebarElm bg-[#3a4e648c]
                           
                           
                           fixed w-[55vw] h-full
                           top-0 left-0
                           transition-all duration-300
                           ${cond ? 'left-0' : 'left-[-100%]'}
                           backdrop-blur-[15px]
                           `}>
               <div className='sticky top-10 text-3xl flex flex-col gap-4 items-center'>

                  <ul>
                     <li>Link1</li>
                  </ul>
                  <ul>
                     <li>Link1</li>
                  </ul>
                  <ul>
                     <li>Link1</li>
                  </ul>
               </div>
            </div>
         </div>
         <Footer />
      </section>
   );
}