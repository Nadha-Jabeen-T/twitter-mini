import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App'
import './index.css'
import NewPost from './Components/NewPost';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <App />}, //<our-domain>--landing page
    {path: '/create-post', element: <NewPost /> }
  ]}, //Layout route - Routes that go with all the other routes or wraps them
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
