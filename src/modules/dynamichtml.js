const DynamicHtml = (text) => {
  text.forEach((element, index) => {
    const LeaderBoard = document.querySelector('#leaderboard');
    const li = document.createElement('li');
    li.classList.add('scores');
    li.innerHTML = `<span class="index">${index + 1}</span>
    <span class="name">${element.user}</span>
    <span class="score">${element.score}</span>`;
    LeaderBoard.appendChild(li);
  });
};

export default DynamicHtml;
