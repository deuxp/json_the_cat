const request = require('request');
const breed = process.argv[2];

/** the cat API --> https://docs.thecatapi.com/
 * ====================================================================================
 * Usage      ->  Uses  To get started: from CLI type the following --> `node breedFetcher.js [query]`
 * Dependency ->  (a) process.argv - to get argument (b) request npm - to connect to cat api
 * Behaviour  ->  1. connect to the cat api using request --> looks for the resource api path --> recieves json of the breed query
 *                2. parses the json from the cat api
 *                3. logs the breed description to the terminal
 *                4. logs if the breed is not found 
 * ====================================================================================
 */

const breedLog = (breed, catJson) => {
  if (!catJson[0]) { // breed not found returns a =n empty array from the cat api
    console.log(`${breed} not found`);
  } else {
    console.log(`${catJson[0].description}`);
  }
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { // this used to be outside of a function
if (error) console.log(`Error code: ${error}`);
console.log(`status code: ${response.statusCode}`);
const breedJson = JSON.parse(body);
breedLog(breed, breedJson)
});








const fetchBreedDescription = (breedname, callback) => { // <-- do I just pass in breedLog to this on the index page ?
  
  
}
// const a = fetchBreedDescription(breed, (error, ) => {

// })


/* 
To test this file we need to have it ina  function
to refactor this file to be an async function that we can call
1. move the request logic onto a function:
2. import it into an index.js file.. any separate file
    this file is where the user can provide the breed name to.
3. set up mocha and chai
*/