
import classes from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
    return (
        <div className={classes.color_grey}>
            <h3 className="mt-5">My Posts</h3>

            <textarea></textarea><br></br>
            <button>Click here</button>
            <div className={classes.posts_all}>
                <Post message='hi' />
                <Post message='hi the, how are you.' />
                <Post message="it' s my first post." />
                <Post />
                <Post />

            </div>
        </div>
    );
}



export default MyPosts;