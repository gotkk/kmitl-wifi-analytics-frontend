const { percentCriteria } = require("../data");

function getColorPercent(percent) {
  let countCriteria = percentCriteria.length;
  if (percent === null) {
    return percentCriteria[countCriteria - 1].color;
  }
  for (let i = 0, arri = percentCriteria.length; i < arri; ++i) {
    if (percent >= percentCriteria[i].min && percent <= percentCriteria[i].max) {
      return percentCriteria[i].color;
    }
  }
  return percentCriteria[countCriteria - 1].color;
}

export default getColorPercent;
