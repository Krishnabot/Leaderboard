import DynamicHtml from "./dynamichtml.js";

const URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fLLGhFOYzdFIIisID8YZ/scores/";

const getScore = () => {
  fetch(URL)
    .then(async (response) => {
      const data = await response.json();
      const DataArray = data.result;
      return DataArray;
    })
    .then((DataArray) => {
      DynamicHtml(DataArray);
    });
};

export default getScore;
