import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllRoutes from './organize/AllRoutes'



function App() {

   return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <div className='AppWrapper'>
            <Routes>
               {AllRoutes}
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
