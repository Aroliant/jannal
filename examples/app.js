var named = require('../lib');
import { SOA } from '../lib/records'
var server = named.createServer();

const port = process.env.PORT || 53

server.listen(port, '127.0.0.1', function () {
  console.log('DNS server started on port ', port);
});


server.on('query', function (query) {


  console.log("query", query.name())
  const domain =  query.name()

  var record = new SOA(domain, {serial: 12345, ttl: 300});
  query.addAnswer(domain, record, 300);

  return server.send(query)

});

server.on('clientError', function (error) {
  console.log("there was a clientError: %s", error);
});

server.on('uncaughtException', function (error) {
  console.log("there was an excepton: %s", error);
});
