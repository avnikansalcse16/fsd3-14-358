import Book from "./components/Book";
import Pen from "./components/Pen";
import { books } from "./data/books";
import { pens } from "./data/pens";
import Fruit from "./components/fruit";
import Event from "./components/Event";

const MyButton=() => {
  let count =1;
  const handleClick = () => {
    console.log("Button Clicked", count);
    count++;
  }

  const handleSubmit = () => {
    alert("Button Clicked!");
  };
    return (
      <button className="bg-black text-white text-xl rounded-md m-4 px-4 py-2" onClick={handleSubmit}> Submit</button>
    )
    }
export default function App() {
  return (
    <>
         <MyButton />
    </>
  );
}