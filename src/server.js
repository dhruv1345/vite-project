const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
