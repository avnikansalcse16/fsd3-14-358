import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get('/about', (req, res) => {
  res.send("We are FSD Developers");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.put('/user/update/1', (req, res) => {
  res.send("User updated successfully");
});

app.delete('/user/1', (req, res) => {
  res.send({msg: 'User removed successfully'});
});

 app.listen(3000, () => console.log('Server is running at 3000'));

//server.on("error", (err) => {
//  console.error("Server error:", err);
//});