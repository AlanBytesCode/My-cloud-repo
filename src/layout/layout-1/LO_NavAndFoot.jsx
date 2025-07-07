
import { NavBar, Footer } from '../../comp/AllCompExport'
import { Outlet } from 'react-router-dom';

export default function LO_NavAndFoot() {
   return (
      <section className='Main1
                        outline
                        min-h-screen
                        
                        bg-gradient-to-b from-indigo-500 via-red-200 to-teal-400
                        grid grid-rows-[auto_1fr_auto]
         '>
         <NavBar />
         <Outlet />
         <Footer />
      </section>
   );
}