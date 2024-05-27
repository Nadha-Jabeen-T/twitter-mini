import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts,{loader as postsLoader} from './routes/Posts'
import './index.css'
import NewPost, {action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {loader as PostDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {
      path: '/', 
      element: <Posts />, 
      loader: postsLoader,
      children: [
      {path: '/create-post', element: <NewPost />, action: newPostAction},
      {path:'/:id', element: <PostDetails/>, loader: PostDetailsLoader}
    ]} //<our-domain>--landing page
  ]}, //Layout route - Routes that go with all the other routes or wraps them
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
