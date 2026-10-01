import Book from "./components/Book";
import Pen from "./components/pen";


const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React design pattern",
  price: 899,
  quantity: 10,
  rating: 4.7,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 1259,
  quantity: 12,
  rating: 4.9,
};

const p1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  company: "Montblanc",
  price: 500,
};

const p2 = { 
  picUrl:"https://m.media-amazon.com/images/I/71wea3sEROL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Woodsworth",
  price: 1000,
};

function Book(props) {
  const {bname, price, quantity, rating, picUrl} = props.book;
  const qstyle={
    fontSize: '1rem',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: "lightgray",
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
      <h3>Quantity: {quantity}</h3>
      <h4 style={{ color: 'red', textAlign: 'center' }}>Rating: {rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}

export default function App() {
  return (
    <>
    <h1>Online Book store</h1>
    <div className="container">
      <Book book={b2} />
      <Book book={b1} />
      <Book book={b2} />
      <Pen pen={p1} />
      <Pen pen={p2} />
      </div>
    </>

  );
}