import express from "express"; 
import path from "path";
import { fileURLToPath } from "node:url";

const port = 3000;

const app = express();

const filename = fileURLToPath(import.meta.url);// refernce of root folder
const dirname = path.dirname(filename);// store the address of project folder

app.use(express.static(path.join(dirname, "frontend")));

app.use((req, res) => {
    res.status(404).send("resource not found");
});

app.listen(port, () => {
  console.log("prg2 is running at", port);
});   

