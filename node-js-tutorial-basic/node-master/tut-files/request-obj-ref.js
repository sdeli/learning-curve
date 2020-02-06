var req = {
    _startTime     :    Date, 
    app            :    function(req,res){},
    body           :    {},
    client         :    Socket,
    complete       :    Boolean,
    connection     :    Socket,
    cookies        :     {},
    files          :     {},
    headers        :    {},
    httpVersion    :    String,
    httpVersionMajor    :    Number,
    httpVersionMinor    :     Number,
    method         :    String,  // e.g. GET POST PUT DELETE
    next           :    function next(err){},
    originalUrl    :    String,     /* e.g. /erer?param1=23¶m2=45 */
    params         :    [],
    query          :    {},
    readable       :    Boolean,
    res            :    ServerResponse,
    route          :    Route,
    signedCookies  :    {},
    socket         :    Socket,
    url            :    String /*e.g. /erer?param1=23¶m2=45 */
};

/*MOST IMPORTANT METHODS*/
req.url => trimmedPath
req.headers => headers
parsedUrl.query => querystring
req.method => Method
/*
ondata: [Function],
     _httpMessage:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Circular],
        connection: [Circular] } },
  connection:
   { _connecting: false,
     _handle:
      { fd: null,
        writeQueueSize: 0,
        owner: [Circular],
        onread: [Function: onread],
        reading: true },
     _readableState:
      { highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: false,
        ended: false,
        endEmitted: false,
        reading: true,
        calledRead: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        objectMode: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Function: ondrain],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState:
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [] },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     errorEmitted: false,
     bytesRead: 357,
     _bytesDispatched: 0,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 1,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:1337' },
     _idleTimeout: 120000,
     _idleNext:
      { _idleNext: [Circular],
        _idlePrev: [Circular],
        msecs: 120000,
        ontimeout: [Function: listOnTimeout] },
     _idlePrev:
      { _idleNext: [Circular],
        _idlePrev: [Circular],
        msecs: 120000,
        ontimeout: [Function: listOnTimeout] },
     _idleStart: 1371952289619,
     parser:
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: [Circular],
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _httpMessage:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Circular],
        connection: [Circular] } },
  httpVersion: '1.1',
  complete: false,
  headers:
   { host: 'localhost:1337',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
     'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like
 Gecko) Chrome/27.0.1453.116 Safari/537.36',
     'accept-encoding': 'gzip,deflate,sdch',
     'accept-language': 'en-US,en;q=0.8,ja;q=0.6' },
  trailers: {},
  _pendings: [],
  _pendingIndex: 0,
  url: '/',
  method: 'GET',
  statusCode: null,
  client:
   { _connecting: false,
     _handle:
      { fd: null,
        writeQueueSize: 0,
        owner: [Circular],
        onread: [Function: onread],
        reading: true },
     _readableState:
      { highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: false,
        ended: false,
        endEmitted: false,
        reading: true,
        calledRead: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        objectMode: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Function: ondrain],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState:
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [] },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     errorEmitted: false,
     bytesRead: 357,
     _bytesDispatched: 0,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 1,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:1337' },
     _idleTimeout: 120000,
     _idleNext:
      { _idleNext: [Circular],
        _idlePrev: [Circular],
        msecs: 120000,
        ontimeout: [Function: listOnTimeout] },
     _idlePrev:
      { _idleNext: [Circular],
        _idlePrev: [Circular],
        msecs: 120000,
        ontimeout: [Function: listOnTimeout] },
     _idleStart: 1371952289619,
     parser:
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: [Circular],
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _httpMessage:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        output: [],
        outputEncodings: [],
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _hangupClose: false,
        socket: [Circular],
        connection: [Circular] } },
  _consuming: false,
  _dumped: false,
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  upgrade: false }
  */