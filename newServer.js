const express = require('express');
const app = express();
const mainRoute = require('./Controllers/mainRout');
const userRoute = require('./Controllers/userRout');

app.use(mainRoute, userRoute);

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
});