import {Fragment} from 'react';
import foodImage from '../../Assert/pizza.jpg';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
// import ShoppingCartIcon from '@material-ui/core/ShoppingCart';

const Header = props =>{
    return  <Fragment>
        <header className={classes.header}>
        <h1>Foodie World 😀 ! </h1>
        <HeaderCart></HeaderCart>
        {/* <Link to={Login}><button> Login </button> </Link>  */}
        <button>SignUp</button> 
                  
        </header>
        <div className={classes.mainimage}>
            <img src={foodImage} alt='Delicious foods are available!'/> 
        </div>
    </Fragment>
}

export default Header;