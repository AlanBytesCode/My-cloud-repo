import { Link } from 'react-router-dom'

export default function NavBar() {
   return (
      <nav className="NavBarComp
                     bg-indigo-400
                     flex p-2 
                     justify-between
                     items-center
                     sticky top-0
      ">
         <img src='#' alt='img'  className='bg-fuchsia-600'/>
         <ul className='flex flex-row gap-2 text-cyan-700'>
            <li>
               <Link className=' bg-indigo-300 flex size-full active:text-fuchsia-300 active:bg-amber-100 transition-all duration-200' to='/'>Home</Link>
            </li>
            <li>
               <Link className=' bg-indigo-300 flex size-full active:text-fuchsia-300 active:bg-amber-100 transition-all duration-200' to='/gallery'>Gallery</Link>
            </li>
         </ul>
      </nav>
   )
}