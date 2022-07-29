const DynamicHtml = (text) => {
  text.forEach((element) => {
    const LeaderBoard = document.querySelector('#leaderboard');
    const li = document.createElement('tr');
    li.classList.add('scores');
    li.innerHTML = `
    <td>${element.user}</td>
    <td>${element.score}</td>`;
    LeaderBoard.appendChild(li);
  });
};

export default DynamicHtml;
