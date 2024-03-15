import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(// define the router to do multiple pages
  [{
     path:"/",
     Component: App
  },
{
  path:"/about",
  Component: About
}]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
