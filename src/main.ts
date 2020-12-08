const express = require("express");
const app = express();

// Return a random integer in range [min; max)
function randomRange(min, max) {
    const delta = max - min;
    return Math.floor(Math.random() * delta + min);
}

app.get('/', function (req, res) {
    res.send('Hello world!')
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
