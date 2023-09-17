
/*
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

*/
/*

app.prepare().then(() => {
  createServer(async (req, res) => {
  try {
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl
            
            if (pathname === '/a') {
              await app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
              await app.render(req, res, '/b', query)
            } else {
              await handle(req, res, parsedUrl)
            }
  } catch (err) {
    console.error('Error occurred handling', req.url, err)
    res.statusCode = 500
    res.end('internal server error')
    }
    
  })
   .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
  .listen(3002, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
})
*/
/*
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'Ciao It works!\n';
    message +=  'dev:' + dev + '\n';
     message +=  'Hostname:' + hostname + '\n';
     message +=  'Port:' + port + '\n';

    var version = 'NodeJS ' + process.versions.node + '\n';
    var response = [message, version].join('\n');
    res.end(response);
});
server.listen();
*/


const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3002
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })



const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
        console.log(parsedUrl);
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`)
    })
}) 

