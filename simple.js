let express = require("express");
let app     = express();
 
app.get("/", (req, res) => {
  res.send("Hello World");
});
 
app.get("/hi", (req, res) => {
    res.send("hi World");
});

app.listen(7777);

// app.get("/save", (req, res) => {
//     var data = req.param('data');
//     console.log(data);
//     fs.writeFileSync("C:/Temp/data.txt", data)
//     res.send(data);
//   });

//   app.get("/public", (req, res) => {
//     var data = fs.writeFileSync("./public/index.html", 'utf8')
//     console.log(data);
    
//     res.send(data);
//   });
  
  app.use('/public', express.static(__dirname + '/public'));

const fs = require('fs');
app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = parseInt(p1) + parseInt(p2);

    res.send("Result : " + result);
});

app.get("/calc", (req, res) => {
    var p1 = Number(req.param('p1'));
    var op = req.param('op');
    var p2 = Number(req.param('p2'));
    var result = "";

    switch (op) {
        case '+' : result = p1 + p2; break;
        case '-' : result = p1 - p2; break;
        case '*' : result = p1 * p2; break;
        case '/' : result = p1 / p2; break;
        default : result = "잘못된 연산자 입니다."
    }

    res.send("Result : " + result);
});

// curl -X POST "localhost:7777/public"
app.post("/public", (req, res) => {
  var data = fs.readFileSync("./public/index.html", 'utf8');
  res.send(data);
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());
   
  app.post("/calc", (req, res) => {
    var p1 = Number(req.body.p1);
    var op = req.body.op;
    var p2 = Number(req.body.p2);
 
    var result = 0;
 
    switch (op) {
        case '!':
            result = p1 + p2;
            break;
        case '-':
            result = p1 - p2;
            break;
        case '*':
            result = p1 * p2;
            break;
        case '/':
            result = p1 / p2;
            break;
        default:
            result = "invalid";
            break;
    }
 
    res.send("Retult : " + result);
  });

  app.post("/calulator", (req, res) => {
 
    var data = req.body;
    var result = eval(data);
    res.send("Result : " + result)
 
  });
