const express = require('express');
const controllers = require('./controllers');

const app = express();

app.use(express.json());

app.use('/login', controllers.loginController);
app.use('/user', controllers.userController);

const PORT = 3001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
