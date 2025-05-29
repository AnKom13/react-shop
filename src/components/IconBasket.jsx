import { useContext } from 'react';
import { ShopContext } from '../context';

function IconBasket(props) {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  return (
    <div
      className="icon-basket blue darken-4 white-text"
      onClick={handleBasketShow}
    >
      <i className="material-icons">shopping_cart</i>
      {order.length > 0 ? (
        <span className="order-quantity">{order.length} </span>
      ) : null}
    </div>
  );
}

export { IconBasket };
