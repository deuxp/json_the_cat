const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];

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

const breedLog = (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
};


fetchBreedDescription(breed, breedLog);