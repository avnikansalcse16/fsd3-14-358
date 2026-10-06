export default function Book(props) {
  const { bname, price, quantity, rating, picUrl } = props.book;

  const qstyle = {
    fontSize: '1rem',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: 'lightgray',
    padding: '10px',
  };

  return (
    <div className="book">
      <img
        src={picUrl}
        alt={bname}
      />

      <h1>{bname}</h1>
      <h2>Price: {price}</h2>

      <h3 style={qstyle}>Quantity: {quantity}</h3>

      <h4 style={{ color: 'red', textAlign: 'center' }}>
        Rating: {rating}
      </h4>

      <button>Buy Now</button>
    </div>
  );
}