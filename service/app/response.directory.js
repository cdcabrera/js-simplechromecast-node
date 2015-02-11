
(function(global, process, undefined){

    /**
     * Directory route response.
     * @param Metadata
     * @returns {Function}
     */
    module.exports = function(Metadata) {

        global.Promise = global.Promise || require('promise');

        return function(req, res, next){

            res.send(req.params);
            return next();
        };
    };

})(global, process);