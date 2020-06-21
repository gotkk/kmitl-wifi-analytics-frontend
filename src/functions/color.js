module.exports = {
    getColorPercent: (percent) => {
        if (percent && percent < 100 && percent >= 0) {
          if (percent > 80) {
            return "#1E88E5";
          } else if (percent > 60) {
            return "#43A047";
          } else if (percent > 40) {
            return "#FFEE58";
          } else if (percent > 20) {
            return "#FB8C00";
          } else {
            return "#E53935";
          }
        } else {
          return "#546E7A";
        }
      },
}