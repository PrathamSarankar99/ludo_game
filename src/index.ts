import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log("Hello world from unstable branch. This is a test");
    res.send('Hello World!');
    res.send('Hello World From main branch!');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
