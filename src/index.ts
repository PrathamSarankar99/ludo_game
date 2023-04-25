import express from 'express';

const app = express();


//This code is from unstable branch.
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
