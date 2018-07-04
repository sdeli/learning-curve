// npm run spies-test-watch
// Mocha run as npm run spies-test-watch so no need to import it

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
   var db = {
        saveUser : expect.createSpy()
    }

    app.__set__('db', db);

    it('it should call the spy correctly', () => {
        let spy = expect.createSpy()
        spy();
        expect(spy).toHaveBeenCalled()
    });

    /*it('it should call save user with user obj', () => {
      let email = 'bgfkszmsdeli@gmail.com';
      let passwd = '123abc';

      app.handleSignup(email, passwd)
      expect(db.saveUser).toHaveBeenCalledWith({email, passwd})
    });*/
});