function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    // eslint-disable-next-line
    removeFromBasket = { removeFromBasket },
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item" key={id}>
      {name}{' '}
      <i
        className="material-icons  basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{' '}
      x {quantity}{' '}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{' '}
      = {price} (цена за 1 шт.)
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-del">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
