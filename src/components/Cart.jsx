import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseCount, decreaseCount } from "../redux/action/action";

export default function App() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector((state) => state.cart.items)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);


    return (
        <>
        <div>
            <h2>Кошик</h2>
            <button onClick={() => navigate('/')}>Назад</button>

            {cartItems.length === 0 ? (
                <p>Кошик порожній</p>
            ) : (
                <>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <p>{item.name} - {item.count} шт. - {item.price * item.count} грн</p>
                            <button onClick={() => dispatch(decreaseCount(item.id))}>-</button>
                             <span>{item.count}</span>
                            <button onClick={() => dispatch(increaseCount(item.id))}>+</button>
                        </li>
                          ))}
                    <h3>Всього: {totalPrice} грн</h3>
                    <button>Оформити</button>
                </ul>
                </>
)}
        </div>
        </>
    )
}