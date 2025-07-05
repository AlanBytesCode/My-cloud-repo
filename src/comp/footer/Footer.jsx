import { Link } from 'react-router-dom'

export default function Footer() {
   return (
      <footer className='FooterComp
                        text-indigo-200
                        bg-slate-600
                        p-2 
      '>
         <ul className='flex flex-row
                        justify-evenly
         '>
            <li>
               <Link className='flex size-full active:bg-fuchsia-400' to='/about'>About</Link>
            </li>
            <li>
               <Link className='flex size-full active:bg-fuchsia-400' to='/contact'>Contact</Link>
            </li>
         </ul>
      </footer>
   )
}