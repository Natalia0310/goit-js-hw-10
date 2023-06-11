async function fetchBreeds() {
    return fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_yf6haDQxI1ScVXNMsFrdDSPArGcUdPYZkV6mxBhXjb256bUAF7vetPcU2puu3l38  '
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching cat breeds');
        }
      })
      .then(dataArrayObj => {
        //   console.log(data);
        //   return data.map(breed => breed.name);
        return dataArrayObj;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  async function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids${breedId}`;
    //   console.log(breedId);
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new error('Error retrieving cat information.');
        }
      })
      .then(data => {
        console.log(data);
        return data[0];
      });
  }
  export { fetchBreeds, fetchCatByBreed }