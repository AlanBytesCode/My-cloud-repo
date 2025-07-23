import { Link } from 'react-router-dom'
export default function NavBar({ infoFromChild }) {
   
   const clickFunc = () => {
      infoFromChild( prev => !prev)
   }
   
   return (
      <nav className="NavBarComp
                     bg-[#394568b2]
                     backdrop-blur-[2px]
                     shadow-[inset_0_-4px_7px_#4b5779d2]
                     flex p-2 
                     justify-between
                     items-center
                     sticky top-0
                     z-10
      ">
         <button onClick={ () => { clickFunc() } }>Menu</button>
         <img src='#' alt='img'  className=' outline w-16'/>
         <ul className='flex flex-row gap-2 '>
            <li>
               <Link className=' flex size-full active:text-fuchsia-300 transition-all duration-200' to='/'>Home</Link>
            </li>
            <li>
               <Link className=' flex size-full active:text-fuchsia-300 transition-all duration-200' to='/gallery'>Gallery</Link>
            </li>
         </ul>
      </nav>
   )
}