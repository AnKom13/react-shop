import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../context';

import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { IconBasket } from './IconBasket';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const { setItems, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  //const [items, setItems] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState([]);
  // const [isBasketShow, setIsBasketShow] = useState(false);
  // const [alertName, setAlertName] = useState('');
  //   console.log(order);

  // const handleBasketShow = () => {
  //   setIsBasketShow(!isBasketShow);
  // };

  // function addToBasket(item) {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

  //   if (itemIndex === -1) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  //   setAlertName(item.name);
  // }

  //function removeFromBasket(itemId) {
  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((e) => e.id !== itemId);
  //   setOrder(newOrder);
  // };

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity < 0 ? 0 : newQuantity,
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setItems(data.shop);
        //        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  // function closeAlert() {
  //   setAlertName('');
  // }

  return (
    <main className="container content">
      <IconBasket order={order} />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
