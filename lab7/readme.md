# Frontend- Backend
# Frontend - Backend
1. create project folder (lab7)
2. create two folder fontend and backend
3. open terminal and split it into two
4. open frontend in to left side terminal
5. open backend into right side terminal
6. in backend
   a. intialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
    ```
    "start":"node app.js",
    "dev": "nodemon app.js" 
    ```
    d. create app.js
7. In Frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select framework as reast from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend.

# Components
1. simple jsx functions return html directly.
2. It must start with capital letter.
3. It should be treated as html tag.
4. It must be closed.

# Object destructure
function Book(props) {
  const {bname, price, quantity, rating, picUrl} = props.book;
 
 Does not depends on order this property is not available then it is initalized with none.
Any components include styles 
1. External CSS = Create class index.html and use in component.
2. Internal CSS = create property as object like 
```
 const qstyle={
    fontSize: '1rem',
    color: 'blue',
    textAlign: 'center',
    backgroundColor: "lightgray",
    padding: '10px',
  };
 ```
 then apply with object attribute and pass the object.
 3. Inline CSS= In this method we use two curly bracket with style attribute . All the css property must be single word.
 For ex: text and align becomes = textAlign
  app.jsx should be minimun code.

  By default button is submit button.

 # Add tailwind to existing react project
 1. open terminal and go to project frontend folder 
 2. install tailwind by 
 `npm install tailwindcss @tailwindcss/vite`
 3. open vite.config.js
 4. add `tailwindcss()` after react()
 5. the file should look like

 ```
 import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
``
6. opem index.css and remove all contents, then add below line
`@import "tailwindcss";` 