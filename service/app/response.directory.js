
(function(global, process, undefined){

    /**
     * Directory route response.
     * @returns {Function}
     */
    module.exports = function() {

        global.Promise          = global.Promise || require('promise');
        global.DirectoryFile    = global.DirectoryFile || require('./common.directoryfile');
        global.Metadata         = global.Metadata || require('./common.metadata');

        return function(req, res, next){

            res.send(req.params);
            return next();
        };
    };

})(global, process);