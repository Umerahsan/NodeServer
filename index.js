
const http=require('http');
const app= require('./app');
const port=process.env.PORT|3000;
const server= http.createServer(app);
server.listen(port,()=>{
    console.log("asdasd");
    
});
// app.get('/',(req,resp)=>{
//     resp.send('Hello World');
// });

// app.get('/api',(req,resp)=>{
// resp.send(['1','2','3'])
// });

// app.get('/api/courses/:id',(req,resp)=>{
//     console.log(req.params.id);
    
//     resp.send(req.params.id);
//     });
    
// 
// app.listen (3000,()=>{
//     console.log(` Listng on ${port}`);
    
// })