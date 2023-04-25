import express from 'express';

const app = express();


//This code is from unstable branch.
//Updated code from another user.
//PrathamSarankar99
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
