const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

// const assert = require('chai').assert;

/**
 * testing an asynchronous function and therefore
 * use done() in each Mocha test to let the framework know
 * when a each test was completed.
 * all the tests are within the async func callback
 */




describe('#fetchBreedDescription', () => {
  
  it(`returns a string description for a valid breed, via callback`, (done) => { // async so done is passed to be call d at the end of each test
    
    // all the tests are within the async func callback
    fetchBreedDescription('persian', (err, desc) => {
      const persianDescription = 'Persians are sweet, gentle cats that can be playful or quiet and laid-back. Great with families and children, they absolutely love to lounge around the house. While they don’t mind a full house or active kids, they’ll usually hide when they need some alone time.';

      assert.equal(err, null);
      assert.equal(persianDescription, desc.trim()); // trim() as a safeguard ?
      done(); // call done() to let the framework know async test is finished

    });
  });

  it('should return "tiger not found"', (done) => {
    fetchBreedDescription('tiger', (err, desc) => {
      assert.equal(null, desc);
      assert.equal(err, 'tiger not found');
      done();
    });
  });

});