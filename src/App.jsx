import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllRoutes from './organize/AllRoutes'


function App() {

   return (
      <BrowserRouter>
         <div className='AppWrapper
                        outline
                        min-h-screen
                        
                        bg-gradient-to-b from-indigo-500 via-red-200 to-teal-400
                        grid grid-rows-[auto_1fr_auto]
         '>
            <Routes>
               {AllRoutes}
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
