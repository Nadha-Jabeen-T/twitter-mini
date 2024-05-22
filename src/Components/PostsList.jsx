
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

import { useState } from "react";

function PostsList({isPosting, onStopPosting}) {
    const [posts,setPosts] = useState([]);//To maintain the list of posts

    //To add the new post component whenever we get new postData
    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData,...existingPosts]);//Passing a new array to setPosts + combining the things from the previous posts array using spread operator
    }

    return(
        <>
        {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>)  : null}
        <ul className={classes.posts}>
            <li><Post author="Max" body="Blak"/></li>
            <li><Post author="Mina" body="Tutu"/></li>
        </ul>
        </>
    );
}
export default PostsList;