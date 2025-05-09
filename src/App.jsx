import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,  
      errorElement: <NotFound />,
    },
    // children: []
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
