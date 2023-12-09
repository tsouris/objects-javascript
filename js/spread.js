// const numbers = [1, 2, 3, 4, 5, 6, 7, 8].concat([4, 5, 6], [6, 7, 8])
const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

console.log(numbers);

const temps = [18, 14, 12, 21, 17, 29, 34];
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const lastWeekTemp = [1, 2, 3];
const currentWeekTemp = [4, 5, 6];
const nextWeekTemp = [7, 8, 9];

const allTemps = [...lastWeekTemp, ...currentWeekTemp, ...nextWeekTemp];
console.log(allTemps);

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSetting = { ...defaultSettings, ...userSettings };
console.log(finalSetting);
