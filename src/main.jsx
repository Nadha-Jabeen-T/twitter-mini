import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts from './routes/Posts'
import './index.css'
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <Posts />, children: [
      {path: '/create-post', element: <NewPost /> }
    ]} //<our-domain>--landing page
  ]}, //Layout route - Routes that go with all the other routes or wraps them
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
