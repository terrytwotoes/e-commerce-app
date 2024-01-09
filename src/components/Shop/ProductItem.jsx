import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="my-4">
      <Card>
        <header className="flex justify-between items-baseline">
          <h3 className="my-2 text-lg">{title}</h3>
          <div className="price rounded-full py-1.5 px-6 bg-gray-800 text-white text-xl">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="text-gray-800">{description}</p>
        <div className="flex justify-end">
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
