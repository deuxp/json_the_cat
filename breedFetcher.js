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

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) console.log(`Error code: ${error}`);
  console.log(`status code: ${response.statusCode}`);
  const breedJson = JSON.parse(body);
  if (body === '[]') { // breed not found returns a =n empty array from the cat api
    console.log(`${breed} not found`);
  } else {
    console.log(`${breedJson[0].description}`);
  }
});
