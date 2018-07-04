var db = require('./db.js');

function handleSignup(email, password){
    db.saveUser({email, password})
}

module.exports = {
    handleSignup
}
