var Hapi = require('Hapi'),
    Good = require('good');

server = new Hapi.Server('localhost', 8000);
server.route({
  method: 'GET',
  path: '/{param}',
  handler: {directory: {path: './public'}}
})

register_params = {
  plugin: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{log: '*', request: '*'}]
    }]
  }
}

server.pack.register(register_params, function (err) {
  if (err) {
    throw err;  
  };
  server.start(function() {
    server.log('info', 'Server running at: '+server.info.uri);
  })
})

server.start()