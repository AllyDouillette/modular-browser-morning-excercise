const app = require('./server');
const port = 3030; // Common default port number

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`)
});