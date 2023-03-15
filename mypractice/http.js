const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('<h1>Hello User!</h1>');
        res.end();
    }
    else if(req.url==='/about'){
        res.write("<p>I'm a freshman,1st year undergrad at IIIT-Bhubaneswar.");
        res.end();
    }
    else{
        res.write("<h1>OOPS!</h1><br><p>This page doesn't seem to exist!</p><br><p>Back home?</p><a href='/'>HomePage</a>");
        res.end();
    }
})


server.listen('3000',()=>{
    console.log('Server is running on port 3000.');
});
