const express = require('express');
const userRouter = require('./routers/user');
const productRouter = require('./routers/product');
require('./db/mongoose');

const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
});