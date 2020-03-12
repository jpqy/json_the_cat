const request = require('request');

if (process.argv.length!==3){
  return console.error('Usage: node breedFetcher.js breedName');
}

const query = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  const data = JSON.parse(body);
  //console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
});