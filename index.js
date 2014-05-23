var levelup = require('levelup');
var Hapi = require('hapi');

var gameDataDb = levelup('../game-db', {
    keyEncoding: require('bytewise'),
    valueEncoding: 'json'
});
var questionDataDb = levelup('../question-db', {
    keyEncoding: require('bytewise'),
    valueEncoding: 'json'
});
var answerDataDb = levelup('../answer-db', {
    keyEncoding: require('bytewise'),
    valueEncoding: 'json'
});

var server = Hapi.createServer('0.0.0.0', 8000);

server.route({
    method: 'GET',
    path: '/games',
    handler: function(request, reply) {
        reply(JSON.stringify({ hello: 'world' }));
    }
});

server.start();
