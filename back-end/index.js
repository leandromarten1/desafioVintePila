const express = require('express');
const controllers = require('./controllers');

const app = express();

app.use(express.json());

app.use('/user', controllers.userController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
