// import { fetchBreeds, fetchCatByBreed } from './cat-api';

// function populateBreedSelect(breeds) {
//   console.log(breeds);
//   const breedSelect = document.getElementById('breed-select');

//   breeds.forEach(breed => {
//     const option = document.createElement('option');
//     option.value = breed.id;
//     option.textContent = breed.name;
//     console.log(option);
//     breedSelect.appendChild(option);
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetchBreeds()
//     .then(breeds => {
//       populateBreedSelect(breeds);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// const id = 'ozEvzdVM-';
// fetchCatByBreed(id);

import fetchBreeds from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds();