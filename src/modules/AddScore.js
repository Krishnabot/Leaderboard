const name = document.querySelector('#name');
const score = document.querySelector('#score');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fLLGhFOYzdFIIisID8YZ/scores/';

const AddScore = () => {
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
};

export default AddScore;
