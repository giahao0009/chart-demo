import moment from "moment";

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

export const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const addNewDataset = (preChar) => {
  let arr = preChar.split(" ");
  let index;
  let char = "";

  if (arr[1] === "Z") {
    return `Quỹ A`;
  }
  for (let i = 0; i < ALPHABET.length; ++i) {
    if (ALPHABET[i] == arr[1]) {
      index = i;
      break;
    }
  }
  char = ALPHABET[index + 1];
  return `Quỹ ${char}`;
};

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

export const getDates = (startDate, endDate, numberDateDefault) => {
  const totalDate = moment.duration(moment(endDate).diff(startDate)).asDays();
  let arrDate = [];
  let date = startDate;
  for (let i = 0; i < totalDate; ++i) {
    arrDate.push(date);
    date = moment(date).add(1, "days").calendar();
  }
  arrDate.push(endDate);

  let genArrDate = [];
  date = startDate;
  for (let i = 0; i < numberDateDefault; ++i) {
    genArrDate.push(date);
    date = moment(date).add(10, "days").calendar();
  }

  const results = arrDate.map((date) => {
    let news = genArrDate.filter((item) => {
      if (date == item) {
        return item;
      } else {
        return "";
      }
    });
    return news;
  });

  const finalResults = [];
  for (let i = 0; i < results.length; ++i) {
    if (results[i][0] == undefined) {
      finalResults.push("");
      continue;
    }
    finalResults.push(results[i][0]);
  }

  return finalResults;
};

export const addDayToCalendar = (startDateDefault, numberDateDefault = 1) => {
  let date_ = [];
  let date = startDateDefault;
  if (numberDateDefault === 1) {
    for (let i = 0; i < 9; ++i) {
      date_.push("");
    }
    date_.push(moment(date).add(10, "days").calendar());
    console.log(date_);
    return date_;
  }
  for (let i = 0; i < numberDateDefault; ++i) {
    date_.push(date);
    date = moment(date).add(10, "days").calendar();
  }
  return date_;
};

export const genRand = (min, max, decimalPlaces) => {
  var rand = Math.random() * (max - min) + min;
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
};
