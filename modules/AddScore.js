import { URL, name, score } from "../src/index.js";

const AddScore = () => {
  fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  });
};

export default AddScore;
