import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      className="border border-1 border-cyan-500 text-cyan-500 hover:text-white hover:border-white"
      onClick={toggleCartHandler}
    >
      <span className="mx-2">My Cart</span>
      <span className="bg-cyan-500 rounded-full px-5 py-1 text-gray-900">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;
