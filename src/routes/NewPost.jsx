import Modal from "../Components/Modal";
import classes from "./NewPost.module.css";

import { useState } from "react";

function NewPost(props) {
    const [enteredBody,setEnteredBody] = useState("");
    //setEnteredBody is a function that updates useState[0]
    const [enteredAuthor,setEnteredAuthor] = useState("");

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); //Prevents the default submit data request to sent to the server
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        props.onAddPost(postData);
        props.onCancel();
    }
    return(
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
            </form>
        </Modal>
        
    );
}
export default NewPost;