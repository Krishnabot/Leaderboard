const DynamicHtml = (text) => {
  text.forEach((element, index) => {
    const LeaderBoard = document.querySelector('#leaderboard');
    const li = document.createElement('li');
    li.classList.add('scores');
    li.textContent = `${index + 1}. ${element.user}:${element.score}`;
    LeaderBoard.appendChild(li);
  });
};

export default DynamicHtml;
