
import React from 'react';

function Hello(args) {
  return (
    <>
      <h1>{args.name}</h1>
      <img 
      src={args.imageurl}
      alt={args.name} />
      style={{ height: "100px", width: "75px" }}
      
      <h2>Author: {args.author}</h2>
      <h3>Rs. {args.price}</h3>
      <h4>Rating: {args.rating}</h4>
    </>
  );
}

export default function App() {

  const book = [
    [
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 299,
    "rating": 4.5,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
  },
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 450,
    "rating": 4.8,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "name": "It Ends with Us",
    "author": "Colleen Hoover",
    "price": 350,
    "rating": 4.2,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg"
  },
  {
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 250,
    "rating": 4.3,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
  },
  {
    "name": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "price": 399,
    "rating": 4.9,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg"
  },
  {
    "name": "The Fault in Our Stars",
    "author": "John Green",
    "price": 320,
    "rating": 4.4,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780142424179-L.jpg"
  },
  {
    "name": "Pride and Prejudice",
    "author": "Jane Austen",
    "price": 280,
    "rating": 4.6,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 375,
    "rating": 4.7,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "Verity",
    "author": "Colleen Hoover",
    "price": 399,
    "rating": 4.5,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9781538724736-L.jpg"
  },
  {
    "name": "The Book Thief",
    "author": "Markus Zusak",
    "price": 340,
    "rating": 4.6,
    "imageurl": "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg"
  }
]
  ];

  return (
    <>
      <h1>Hello, React!</h1>

      <Hello name="The Great Gatsby"
        author="F. Scott Fitzgerald" price={500} />

      <Hello name="To Kill a Mockingbird"
        author="Harper Lee" price={400} />

      <Hello {...book[0]} />

      {book.map((item, index) =>
        <Hello key={index} {...item} />
      )}

    </>
  );
}
