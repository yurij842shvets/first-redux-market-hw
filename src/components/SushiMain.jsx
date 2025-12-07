import { sushiData } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {addToCart,  increaseCount, decreaseCount,} from "../redux/action/action";
import { useNavigate } from "react-router-dom";

export default function SushiMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (sushi) => dispatch(addToCart(sushi));
  const handleIncrease = (id) => dispatch(increaseCount(id));
  const handleDecrease = (id) => dispatch(decreaseCount(id));

  const getCartItem = (id) => cartItems.find((item) => item.id === id);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <>
      <header>
        <button onClick={() => navigate("/cart")}>Кошик ({totalPrice}) </button>
      </header>

      <main>
        {sushiData.map((sushi) => {
          const cartItem = getCartItem(sushi.id);
          return (
            <div key={sushi.id}>
              <p>{sushi.name}</p>
              <p>{sushi.description}</p>
              <p></p>

              {!cartItem ? (
                <button onClick={() => handleAddToCart(sushi)}>Додати</button>
              ) : (
                <div>
                  <button onClick={() => handleDecrease(sushi.id)}>-</button>
                  <p>{cartItem.count}</p>
                  <button onClick={() => handleIncrease(sushi.id)}>+</button>
                  <p>Сума: {sushi.price * cartItem.count} грн</p>
                </div>
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}
