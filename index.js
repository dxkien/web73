import  Express  from "express";
const app = Express();

app.get('/', (req, res) => {
    res.send({
        message: 'thanh cong'
    });
})

app.listen (5000, () => {
    console.log('server run');
})