const {fetchBreedDescription} = require('./breedFetcher');

if (process.argv.length !== 3) {
  return console.error('Usage: node index.js breedName');
}

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});