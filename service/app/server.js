/**
 * Start server.
 */
module.exports = (function(global, process, undefined){

    global.Restify = global.Restify || require('restify');

    var _restify = global.Restify,
        _server,
        _routes;

    /**
     * Start the server.
     * @param port
     */
    function start(port) {

        _server = _restify.createServer();
        _server.use(_restify.bodyParser());

        generateRoutes(_server, _routes);

        _server.listen((port || 8080), function () {

            console.log('%s listening at %s', _server.name, _server.url);
        });
    }

    /**
     * Generate provided routes.
     * @param server
     * @param routes
     */
    function generateRoutes(server, routes) {

        for (var i=0; i<routes.length; i++) {

            var route = routes[i];

            if (route.get && route.get.length) {

                server.get.apply(server, route.get);
            }

            if (route.head && route.head.length) {

                server.head.apply(server, route.head);
            }

            if (route.put && route.put.length) {

                server.put.apply(server, route.put);
            }

            if (route.del && route.del.length) {

                server.del.apply(server, route.del);
            }
        }
    }

    /**
     * Convert arguments to array.
     * @returns {Array}
     */
    function convertArguments () {

        var args        = Array.prototype.slice.call(arguments),
            returnArray = [];

        while (args.length) {

            var temp = args.shift();

            if ( Object.prototype.toString.call(temp) === "[object Array]" ) {

                returnArray = returnArray.concat(temp);
            } else if (temp) {

                returnArray.push(temp);
            }
        }

        return returnArray;
    }


    return {

        start: function(port) {

            var self = this;

            setTimeout(function(){

                start.call(self, port);
            },0);

            return this;
        },

        stop: function () {

            process.exit();
            return this;
        },

        routes : function () {

            _routes = convertArguments.apply(this, arguments);
            return this;
        }

    };

})(global, process);