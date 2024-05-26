import { Outlet } from "react-router-dom";
import PostsList from "../Components/PostsList";

import { useState } from "react";

function Posts() {
  return(
    <>
    <Outlet />
      <main>
        <PostsList />
     </main>
    </>
  ); 
}

export default Posts;
