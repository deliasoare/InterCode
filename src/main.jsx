import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '././styles/styles.scss'

import Courses from './components/Courses.jsx';
import Grafuri from './components/Grafuri.jsx';
import Lesson from './components/Lesson.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path:'/cursuri', element: <Courses />},
  {path:'/cursuri/grafuri', element: <Grafuri />},
  {path: '/cursuri/grafuri/:id', element: <Lesson />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
