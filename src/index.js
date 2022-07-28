import './style.css';
import DynamicHtml from './dynamichtml.js';

const dynamicContent = {
  result: [
    {
      user: 'One',
      score: 100,
    },
    {
      user: 'Two',
      score: 125,
    },
    {
      user: 'Three',
      score: 140,
    },
    {
      user: 'Four',
      score: 178,
    },
    {
      user: 'Five',
      score: 300,
    },
  ],
};

// print the data into the html
dynamicContent.result.forEach((element) => {
  const text = `${element.user}: ${element.score}`;
  DynamicHtml(text);
});
