
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

import { useState , useEffect} from "react";

function PostsList({isPosting, onStopPosting}) {

       const [posts,setPosts] = useState([]);//To maintain the list of posts

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
        }
        fetchPosts();
    },[]);

    //To add the new post component whenever we get new postData
    function addPostHandler(postData) {
        //To send the posts to db and store it there when we create a new post.
        fetch('http://localhost:8080/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData,...existingPosts]);//Passing a new array to setPosts + combining the things from the previous posts array using spread operator
    }

    return(
        <>
        {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>)  : null}
        {posts.length > 0 && ( 
            <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
        </ul>)}
       {posts.length === 0 && (
        <div style={{textAlign:'center', color:'whiteSmoke'}}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
        </div>
       )}
        </>
    );
}
export default PostsList;