const names = ["Joe Goldberg","Zayn Malik"];
function Post(){

const chosenName = Math.random()>0.5 ? names[0] : names[1];
    return (
        <div>
            <p>{chosenName}</p>
            <p>Counting days till the D-Day!</p>
        </div>
    );
}
export default Post;