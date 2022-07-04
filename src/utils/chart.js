export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const months = (config) => {
  let cfg = config || {};
  let count = cfg.count || 12;
  let section = cfg.section;
  let values = [];
  let value;
  for (let i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }
  return values;
};
