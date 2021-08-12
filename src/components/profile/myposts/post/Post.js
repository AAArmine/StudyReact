
import classes from './Post.module.css';
import avatar1 from './../../../../images/av1.png';

const Post = (props) => {
    return (
        <div className={classes.separate_post}>
            <div className={classes.seprate_post_flex}>
                <div><img src={avatar1} alt="avatar" width='130px' height='auto' /></div>
                <div className='mt-5 pl-5'>{props.message}</div>
            </div>


        </div >

    );
}



export default Post;
