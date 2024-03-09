const express=require('express')

const app=express();


app.use(express.json())


app.get('/',(req,res)=>
{
    res.json(`This Is Demo Route`)
})


app.listen(4000,()=>
{
    console.log(`Server is running on 4000`);
})