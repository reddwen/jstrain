var express =require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

var port =process.env.PORT||8080;
var router=express.Router();

router.use(function(req,res,next){
    console.log('There is a req.');
    next();
});

router.use(function(req,res,next){
    console.log('Time:'+Date.now());
    next();
});

router.get('/',function(req,res){
    res.send('<h1>Hello World</h1>');
});

router.get('/:name',function(req,res){
    res.send('<h1>Hello '+req.params.name+' </h1>')
})

router.post('/',function(req,res){
    var name=req.body.name;
    res.json({message:'Hello '+name});
});

router.post('/\?name=',function(req,res){
    var name=req.query.name;
    res.json({message:'Hello '+name});
});


app.use('/home',router);
app.listen(port);
console.log('port:'+port);