


import classes from './App.module.css';
import Header from './components/header/Header.js';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/profile/Profile';

const App = () => {
  return (
    <div>
      <Header />
      <div className={classes.main_flex}>

        <div className={classes.main_flex_item1}><Sidebar /></div>
        <div className={classes.main_flex_item2}><MainContent /></div>

      </div>
    </div >


  );
}


export default App;
