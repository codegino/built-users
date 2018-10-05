const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('client/build'));

app.get('/users', async (req, res) => {
  const {count} = req.query
  const result = await axios.get(`https://randomuser.me/api/?results=${count}`)
  const users = result.data.results
  res.send(users)
})

if (['production'].includes(process.env.NODE_ENV)) {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Starting app at port ${port}`);
});