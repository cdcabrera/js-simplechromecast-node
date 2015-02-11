/**
 * Get directories or files with info.
 * @param global
 * @param process
 * @param undefined
 * @returns {{files: Function, directories: Function, info: Function}}
 */
module.exports = (function(global, process, undefined){

    global.Promise  = global.Promise || require('promise');
    global.Fs       = global.Fs || require('fs');
    global.Path     = global.Path || require('path');

    var _fs     = global.Fs,
        _path   = global.Path;

    /**
     * Recursively get all files and associated file information/stats
     * @param path
     * @returns {promise}
     */
    function getFiles (path) {

    }

    /**
     * Recursively get all directories
     * @param path
     * @returns {promise}
     */
    function getDirectories (path) {

    }


    function files (path) {

    }

    /**
     * Get information/stats for a specific file
     * @param path
     * @returns {promise}
     */
    function info (path) {

    }

    return {

        files: function(path) {
            return getFiles.call(this, path);
        },


        directories: function(path) {
            return getDirectories.call(this, path);
        },


        info: function(path) {
            return info.call(this, path);
        }
    };

})(global, process);