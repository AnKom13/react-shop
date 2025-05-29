import { useContext } from 'react';
import { ShopContext } from '../context';

function Item(props) {
  let image;
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    //    displayAssets: [{ full_background: image }],
    price: { regularPrice: price },
    //    addToBasket = Function.prototype,
  } = props;
  //из источника приходят данные и у некоторых нет поля full_background
  //Это вызывает краш
  // А эта конструкция решает эту проблему
  try {
    image = props.displayAssets[0].full_background;
  } catch (error) {
    //console.log('err->', props);
    image = null;
  }

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { Item };
