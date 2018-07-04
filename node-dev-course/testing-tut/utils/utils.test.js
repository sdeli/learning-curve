// npm run test-watch
// Mocha run as npm run test-watch so no need to import it
const utils = require('./utils');
const expect = require('expect');
var assert = require('assert');

describe('Async functions', function() {
        this.timeout(10000);
    it('it should return a html page', (done) => {
        utils.requestWikiPage().then(resBody => {
            assert.equal(resBody.indexOf('<!DOCTYPE html>'), 0);
            done();
        });
    });
});

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  expect(res).toNotBe(45).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should not be 45', () => {
  var res = utils.add(33, 11);

  expect(res).toNotBe(45).toBeA('number');
});

it('setName', () => {
    expect(utils.setName({},'Sandor Deli')).toEqual({
        firstName : 'Sandor',
        lastName : 'Deli'
    }).toBeA('object');
});

it('objects should be equal', () => {

    expect({sandor : 'sandor'}).toEqual({sandor : 'sandor'});
    expect({sandor : 'sandor'}).toNotEqual({sandor1 : 'sandor1'});
    expect([1,2,3]).toInclude(2);
    expect([1,2,3]).toExclude(4);
    expect({
        sandor : 'sandor',
        age : 14
    }).toInclude({
        age : 14
    });
});