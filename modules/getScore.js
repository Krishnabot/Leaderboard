import DynamicHtml from "./dynamichtml.js";
import { URL } from "../src/index.js";

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
