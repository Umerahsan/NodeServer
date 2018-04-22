const express=require('express');
const app = express();

app.get('/',(req,resp)=>{
    resp.send('Hello World');
});

app.get('/api',(req,resp)=>{
resp.send(['1','2','3'])
});

app.get('/api/courses/:id',(req,resp)=>{
    console.log(req.params.id);
    
    resp.send(req.params.id);
    });
    
const port=process.env.port||3000;
app.listen (3000,()=>{
    console.log(` Listng on ${port}`);
    
})