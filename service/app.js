

var Server              = require('./app/server'),
    Metadata            = require('./app/common.metadata'),
    DirectoryResponse   = require('./app/response.directory');
    //fileResponse        = require('./app/response.file'),
    //imageResponse       = require('./app/response.image'),
    //subtitleResponse    = require('./app/response.subtitle'),
    //videoResponse       = require('./app/response.video');


Server
    .start(8085)
    .routes([
        { get:['/directory/:path', DirectoryResponse(Metadata)] }
        //{ get:['/file/:path', fileResponse(metadata)] },
        //{ get:['/image/:path', imageResponse(metadata)] },
        //{ get:['/subtitle/:path', subtitleResponse(metadata)] },
        //{ get:['/video/:path', videoResponse(metadata)] }
    ]);
