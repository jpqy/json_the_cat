const request = require('request');

if (process.argv.length !== 3) {
  return console.error('Usage: node breedFetcher.js breedName');
}

const query = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (error) {
    return console.error('Error accessing API!');
  }

  const data = JSON.parse(body);
  if (!body.description) {
    return console.error('Invalid query!');
  }

  console.log(data[0].description);
});