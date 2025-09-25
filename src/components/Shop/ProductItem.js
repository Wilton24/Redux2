import Card from '../UI/Card';
import { useSelector } from 'react-redux';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from "../../store/cartStore";


const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const cartItems = useSelector((state) => state.cart.items);

  function addItemToCart() {
    console.log('Cart Items:', cartItems);
    dispatch(
      addItem({
        id: props.id,
        title,
        price,
      })
    );

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
