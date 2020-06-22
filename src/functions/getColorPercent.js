const { percentCriteria } = require("../data");

module.exports = {
  getColorPercent: (percent) => {
    if (percent && percent < 100 && percent >= 0) {
      if (percent > 80) {
        return percentCriteria[0].color;
      } else if (percent > 60) {
        return percentCriteria[1].color;
      } else if (percent > 40) {
        return percentCriteria[2].color;
      } else if (percent > 20) {
        return percentCriteria[3].color;
      } else {
        return percentCriteria[4].color;
      }
    } else {
      return percentCriteria[5].color;
    }
  },
};
