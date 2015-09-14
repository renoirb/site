var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(process.env.PORT || 4000, function() {
    var io = require('socket.io').listen(server);

    console.log('Listening on port %d', server.address().port);

    io.on('connection', function slideshowSocketConnector (socket) {

        console.log('Connection from ', socket.id);

        /**
         * Sync slides state accross different browsers.
         *
         * Server side forwarder. This is what takes care of forwarding
         * send events to other browsers.
         *
         * Thanks to:
         * - https://github.com/outsideris/Socket.IO-Slide
         * - https://bocoup.com/weblog/synchronizing-html5-slides-with-node-js/
         * - https://github.com/epeli/geekslides
         */
        socket.on('nextSlide', function slideshowSocketFooHandler (eventObj) {
            socket.broadcast.emit('triggerSlide', eventObj);
            console.log('triggerSlide emitted', eventObj);
        });
    });

});
