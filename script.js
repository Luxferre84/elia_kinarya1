const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const sisi = queryObject.sisi;

  if (sisi === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Masukkan parameter sisi dalam query string Anda.\n');
  } else {
    const perimeter = 4 * sisi;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Keliling persegi dengan panjang ${sisi} adalah ${perimeter}.\n`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});