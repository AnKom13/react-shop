import { useContext } from 'react';
import { ShopContext } from '../context';

import { Item } from './Item';

function ItemsList() {
  const { items = [] } = useContext(ShopContext);

  if (!items.length) {
    return <h3>Ничего не найдено</h3>;
  }

  return (
    <div className="items">
      {items.map((i) => (
        <Item key={i.mainId} {...i} />
        //        <Item key={i.mainId} {...i} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
export { ItemsList };
