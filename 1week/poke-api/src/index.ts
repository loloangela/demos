import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello From Express')
})

app.listen(3000);