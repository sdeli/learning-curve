
// IMPORTANT
// INCOMMING REQ obj: created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response'

// implements the READABLE STREAM interface and EVENT EMITTER
let IncomingMessageObjImpProps = {
    method : '',
    url : '',
    socket : '',
    connection : '',
    client : '',
    statusCode : 'Contains the hostname from the "Host" HTTP header.',
    statusMessage : 'The remote IP address of the request.',
    headers : {
        descr : ' contains route parameters (in the path portion of the URL'
        userAgent : 'called user-agent'
    }
}

let reqObjevents = {
    response : 'when a response is received to this request',
    socket : 'Emitted after a socket is assigned to this request.',
    timeout : 'Emitted when the underlying socket times out from inactivity.',
    abort : ' when the request has been aborted by the client',
    connect : '',
    upgrade : ''
} // AND EVENTS INHERITED FROM STREAM CLASS

//REQ METHOD TYPES

// GET:
// The GET method is the method used by the browser to ask the server to send back a given resource.
// In this case, the browser sends an empty body. 
// Because the body is empty, the data sent to the server is appended to the URL.