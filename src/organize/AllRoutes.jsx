import { Route } from 'react-router-dom'

import { LO_NavAndFoot, LO_OffPages } from '../layout/AllLayoutsExport'

import { Home } from '../pages/On-home-page/AllPagesExport'
import { Gallery, NoPage } from "../pages/Off-home-page/AllPagesExport"


const AllRoutes = [
   (<Route element={<LO_NavAndFoot />}>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
   </Route>),
  
   (<Route element={<LO_OffPages />}>
      <Route path="/*" element={<NoPage />} />
   </Route>),

   //(<Route path="/" element={< />} />),
   //(<Route path="/" element={< />} />),
   //(<Route path="/" element={< />} />),
]

export default AllRoutes