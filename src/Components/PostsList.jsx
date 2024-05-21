
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

import { useState } from "react";

function PostsList() {
    const [enteredBody,setEnteredBody] = useState("");
    //setEnteredBody is a function that updates useState[0]
    const [enteredAuthor,setEnteredAuthor] = useState("");

    //Registering the state for toggle visibility of Modal
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler(params) {
        setModalIsVisible(false);
    }

    return(
        <>
        {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
        </Modal>)  : null}
        <ul className={classes.posts}>
            <li><Post author={enteredAuthor} body={enteredBody}/></li>
            <li><Post author={enteredAuthor} body={enteredBody}/></li>
        </ul>
        </>
    );
}
export default PostsList;