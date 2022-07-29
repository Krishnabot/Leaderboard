import './style.css';
import AddScore from "./modules/AddScore.js";
import getScore from "./modules/getScore.js";
import matrix from "./modules/background-canvas.js";

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const score = document.querySelector("#score");
const LeaderBoard = document.querySelector("#leaderboard");
const RefreshBtn = document.querySelector("#refresh");
const URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fLLGhFOYzdFIIisID8YZ/scores/";

getScore();
matrix();
RefreshBtn.addEventListener('click', () => {
  LeaderBoard.innerHTML = '';
  getScore();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  AddScore();
  form.reset();
});

export {
  LeaderBoard, URL, name, score,
};
