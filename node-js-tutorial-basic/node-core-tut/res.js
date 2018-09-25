

//IMPORTANT NOTES
// Instance of IncommingMessage < Readable < Stream < EventEmitter
// REF: https://www.w3schools.com/nodejs/obj_http_serverresponse.asp
let serverResMethodsAndProperties = {
    writeHead() : Sends status and response headers to the client
    write() : Sends text, or a text stream, to the client
    end() : Signals that the the server should consider that the response is complete
    addTrailers() : Adds HTTP trailing headers
    finished : Returns true if the response is complete, otherwise false
    getHeader() : Returns the value of the specified header
    headersSent : Returns true if headers were sent, otherwise false
    removeHeader() : Removes the specified header
    sendDate : Set to false if the Date header should not be sent in the response. Default true
    setHeader() : Sets the specified header
    setTimeout : Sets the timeout value of the socket to the specified number of milliseconds
    statusCode : Sets the status code that will be sent to the client
    statusMessage : Sets the status message that will be sent to the client
    writeContinue() : Sends a HTTP Continue message to the client
}