const { percentCriteria } = require("../data");

function getColorPercent(percent) {
  if (percent === null) {
    return percentCriteria[percentCriteria.length - 1].color;
  }
  for (let i = 0, arri = percentCriteria.length; i < arri; ++i) {
    if (percent >= percentCriteria[i].min && percent < percentCriteria[i].max) {
      return percentCriteria[i].color;
    }
  }
}

export default getColorPercent;
