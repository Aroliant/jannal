var fs = require('fs');
var path = require('path');

var bunyan = require('bunyan');

var Server = require('./server');
var Query = require('./query');
var Protocol = require('./protocol');



////--- Globals

var BUNYAN_SERIALIZERS = {
        err: bunyan.stdSerializers.err,
        query: function serializeQuery(q) {
                var out = {
                        domain: q.name(),
                        operation: q.operation(),
                        type: q.type()
                };
                return (out);
        }
};



///--- Exports
module.exports = {

        createServer: function createServer(options) {
                options = options || {};
                if (typeof (options) !== 'object')
                        throw new TypeError('options (object) required');


                var opts = {
                        name: options.name || 'named',
                        log: options.log || bunyan.createLogger({
                                name: 'named',
                                level: 'warn',
                                serializers: BUNYAN_SERIALIZERS
                        })
                };
                return (new Server(opts));
        },

        Query: Query,

        Protocol: Protocol,

        bunyan: { serializers: BUNYAN_SERIALIZERS }

};