import { Route } from 'react-router-dom'
import Layout from '../layout/Layout'

import { Home } from '../pages/On-home-page/AllPagesExport'
import { Gallery } from "../pages/Off-home-page/AllPagesExport"


const AllRoutes = [
   (<Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
   </Route>),


   //(<Route path="/" element={< />} />),
   //(<Route path="/" element={< />} />),
]

export default AllRoutes