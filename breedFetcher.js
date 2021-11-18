const request = require('request');

/** the cat API --> https://docs.thecatapi.com/
 * ====================================================================================
 * Usage      ->  Uses  To get started: from CLI type the following --> `node index.js [query]`
 * Dependency ->  (a) process.argv - to get argument (b) request npm - to connect to cat api
 * Behaviour  ->  1. connect to the cat api using request --> looks for the resource api path --> recieves json of the breed query
 *                2. parses the json from the cat api
 *                3. logs the breed description to the terminal
 *                4. logs if the breed is not found 
 * ====================================================================================
 */

const fetchBreedDescription = (breedname, callback) => { // <-- callback should take only 2 params (error, description), breedfetcher should chose whether the callback logs error and null for the description -> which would only print the error OR a string with eh breed name not found as the error msg being passed to the callback function --> still a simple logger
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => { // this used to be outside of a function
  if (error) return callback(error, null); // <-- return ends the function if connection is not established
  const breedJson = JSON.parse(body);
  if (!breedJson.length) return callback(`${breedname} not found`) // <-- return ends the function if the array length returned is 0 -- passing a user defined error msg to callback
  const breedDesc = breedJson[0].description;
  callback(null, breedDesc)
  });
  
}

module.exports = {fetchBreedDescription};


/* 
To test this file we need to have it in a  function
to refactor this file to be an async function that we can call
1. move the request logic onto a function:
2. import it into an index.js file.. any separate file
    - this file is where the user can provide the breed name to.
    - index.js has the callback .. could have been defined inline -- the simple logger
    - just make sure that the logic from breedFetcher is clear
3. set up mocha and chai
*/