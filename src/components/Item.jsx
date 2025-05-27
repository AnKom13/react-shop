function Item(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    displayAssets: [{ full_background: image }],
    price: { regularPrice: price },
    addToBasket = Function.prototype,
  } = props;
  // const image = null;
  // const tmp = props.displayAssets[0];
  // const tmp2 = props.price.regularPrice;
  // //console.log(tmp.full_background);
  // console.log(tmp2);

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
