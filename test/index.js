var redditShare = 'undefined' == typeof window
  ? require('..')
  : require('reddit-share'); // how to do this better?

var assert = require('assert');

describe('redditShare', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
