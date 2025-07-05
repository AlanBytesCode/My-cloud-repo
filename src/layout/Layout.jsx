
import { NavBar, Footer } from '../comp/AllCompExport'
import { Outlet } from 'react-router-dom';

export default function Layout() {
   return (
      <>
         <NavBar />
         <Outlet />
         <Footer />
      </>
   );
}