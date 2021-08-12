
import classes from './Profile.module.css';
import avatar from './../../images/avatar.jpg';
import MyPosts from './myposts/MyPosts';

const Profile = () => {
  return (
    <div className="">
      <div className={classes.background_img} style={{
        backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9R6WVd7lIJePzBBD2MiZRy511oh9ONh0H_w&usqp=CAU" + ")",

      }}>
      </div >
      <div className={classes.avatar_sec} className='mt-5'>
        <div className={classes.avatar_flex}>

          <div className={classes.avatar_img} style={{
            backgroundImage: `url(${avatar})`
          }}>

          </div>
          <div className={classes.avatar_info}>
            <div>Name Surname</div>
            <div> Age 27</div>
          </div>


        </div>
      </div >

      <MyPosts />
    </div >

  );
}

export default Profile;
