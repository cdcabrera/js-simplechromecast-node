/**
 * Initialize app. Load resources.
 */
var Server              = require('./app/server'),
    //DirectoryFile       = require('./app/common.directoryfile'),
    //Metadata            = require('./app/common.metadata'),
    DirectoryResponse   = require('./app/response.directory');
    //fileResponse        = require('./app/response.file'),
    //imageResponse       = require('./app/response.image'),
    //subtitleResponse    = require('./app/response.subtitle'),
    //videoResponse       = require('./app/response.video');


Server
    .start(8085)
    .routes([
        { get:['/directory/:path', DirectoryResponse()] }
        //{ get:['/file/:path', fileResponse(DirectoryFile, Metadata)] },
        //{ get:['/image/:path', imageResponse(DirectoryFile, Metadata)] },
        //{ get:['/subtitle/:path', subtitleResponse(DirectoryFile, Metadata)] },
        //{ get:['/video/:path', videoResponse(DirectoryFile, Metadata)] }
    ]);
