
import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList() {
    return(
        <ul className={classes.posts}>
            <li><Post author="Joe" body="D Day coming"/></li>
            <li><Post author="Zayn" body="Stranger Things"/></li>
        </ul>
    );
}
export default PostsList;