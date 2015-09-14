var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(process.env.PORT || 4000, function() {
    var io = require('socket.io').listen(server);

    console.log('Listening on port %d', server.address().port);

    io.on('connection', function slideshowSocketConnector (socket) {

        console.log('Connection from ', socket.id);

        socket.on('nextSlide', function slideshowSocketFooHandler (eventObj) {
            socket.broadcast.emit('triggerSlide', eventObj);
            console.log('triggerSlide emitted', eventObj);
        });
    });

});
