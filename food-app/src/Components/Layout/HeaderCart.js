import CartIcon from '../Cart/Cart';
import classes from './Header.module.css';

const HeaderCart = props =>{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span > Your Cart </span>
        <span className={classes.badge}> 3</span>
    </button>
};

export default HeaderCart;
