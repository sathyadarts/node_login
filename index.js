var express=require('express')
var ejs =require('ejs')
var mysql=require('mysql')
var app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.get('/',function(req,res){
    res.render('pages/index');
    });
    app.get('/reg',function(req,res){
        res.render('pages/reg');
      });


    app.post('/vlogin',function(req,res,next){

    var uname=req.body.uname;
    var pwd=req.body.pwd;
   
    if(uname =="sathya")
    {
    if(pwd =="12345")
    {
       console.log("login success");
       res.redirect ('/');
    }
    else
    {
       console.log("invalid password");
       res.redirect('/errorpage');
    }
   }
   else
   {
       console.log("invalid username");
       res.redirect('/errorpage');
   }
   });
   var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"reg1"
     });
    con.connect(function(err){
    if(err){
     throw err;
     }
     });

  app.post('/',function(req,res,next){
    var name=req.body.studentname;
    var course=req.body.course;
    var department =req.body.department;
    var emailid=req.body.emailid;
    var phnno=req.body.phnno;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword;
    var semester=req.body.semester;
    var academicyear=req.body.academicyear;
    var query="insert into student(name,course,department,emailid,phnno,password,confirmpassword,academicyear) values('"+req.body.name+"','"+req.body.course+"','"+req.body.department+"','"+req.body.emailid+"','"+req.body.phnno+"','"+req.body.password+"','"+req.body.confirmpassword+"','"+req.body.academicyear+"')";
    con.query(query,function(err,result){
    if(err)
    {
    throw err;
    }
    else
    {
     console.log("Inserted Successfully");{
     res.redirect ('/');
}
    }
    });
    });