import { Item } from './Item';

function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    return <h3>Ничего не найдено</h3>;
  }

  return (
    <div className="items">
      {items.map((i) => (
        <Item key={i.mainId} {...i} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
export { ItemsList };
