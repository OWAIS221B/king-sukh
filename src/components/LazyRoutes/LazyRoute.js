import { lazy } from "react";


const Dashboard = lazy(() => import('../Dashboard/Dashboard'))
const HotelDetails = lazy(() => import('../HotelsDetails/HotelsDetails'))




export { Dashboard, HotelDetails }
