import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="my-4 bg-gray-700 py-4 px-6">
      <header className="flex justify-between items-baseline">
        <h3 className="mb-2 text-3xl">{title}</h3>
        <div className="text-xl font-bold">
          ${total.toFixed(2)}{" "}
          <span className="italic text-sm">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">
          x <span>{quantity}</span>
        </div>
        <div className="flex items-center">
          <button
            className="border border-white ml-4 px-4 py-1 text-white hover:bg-gray-600"
            onClick={removeItemHandler}
          >
            -
          </button>
          <button
            className="border border-white ml-2 px-4 py-1 text-white hover:bg-gray-600"
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
