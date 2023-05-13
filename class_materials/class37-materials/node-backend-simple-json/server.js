const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // Coin Flip API
  else if (page == '/api') {
    if('coin' in params){
      if(params['coin'] == 'heads' || params['coin'] == 'tails'){
        // Randomized result
        let result = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails';

        // Set image based on result
        let img = ''
        result == 'heads' ? img = 'https://i.ebayimg.com/images/g/RRAAAOSwMBZiRGou/s-l500.jpg' : img = 'https://i.etsystatic.com/7350302/r/il/5dbfff/4769254062/il_fullxfull.4769254062_az0p.jpg'

        // if code works, display results
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: result,
          img: img
        }
        res.end(JSON.stringify(objToJson)); 
      }
    }
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
