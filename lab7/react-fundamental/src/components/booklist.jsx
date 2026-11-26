import book from './book.jsx';
import {books} from './data.js';

function booklist() {
  
  return (
    <>
    <h1> book list are: total {books.length}</h1>

    {books.map((item) => (
        <book {...item} />
    ))} 
    </>
    );
   
  
}

export default booklist
