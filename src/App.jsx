import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
// import Dashboard from './components/Dashboard/Dashboard'
// import HotelsDetails from './components/HotelsDetails/HotelsDetails'
import * as LazyRoute from './components/LazyRoutes/LazyRoute'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <LazyRoute.Dashboard />,
        },
        {
          path: '/hotel-details/:id',
          element: <LazyRoute.HotelDetails />,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
