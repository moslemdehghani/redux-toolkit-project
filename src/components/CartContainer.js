import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2> سبد خرید شما</h2>
          <h4 className='empty-cart'> در حال حاضر خالی است برای راه اندازی سبد خرید صفحه را رفرش کنید </h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2> سبد خرید </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            مجموع خرید <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
           حذف کامل محصولات
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
