const DynamicHtml = (text) => {
  const leaderboard = document.getElementById('leaderboard');
  const li = document.createElement('li');

  li.classList.add('scores');
  li.innerHTML = text;

  leaderboard.appendChild(li);
};

export default DynamicHtml;
