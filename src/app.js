import express from 'express';
const app = express();

app.use(express.json())

app.get('/hw',(req, res)=>{
    res.status(200).send({
        status:"success",
        message:"Hello World"
    })
})


app.listen(3000,()=>{
    console.log("server started in port 3000")
})