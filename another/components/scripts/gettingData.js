let date = new Date();

let currentMonth = ('0' + (parseInt(date.getMonth()) + 1)).slice(-2);
let currentDay = ('0' + date.getDate()).slice(-2);
let currentFullYear = date.getFullYear();
let currentYear = currentFullYear.toString().slice(-2);
let getCurrentHours = () => ('0' + new Date().getHours()).slice(-2);
let getCurrentMinutes = () => ('0' + new Date().getMinutes()).slice(-2);
let getCurrentSeconds = () => ('0' + new Date().getSeconds()).slice(-2);
let getEuFormat = () => `${currentMonth}/${currentDay}/${currentYear}`;
let getUaFormat = () => `${currentDay}:${currentMonth}:${currentFullYear}`;
let getShortTime = () => `${getCurrentHours()}:${getCurrentMinutes()}`;
let getFullTime = () => `${getCurrentHours()}:${getCurrentMinutes()}:${getCurrentSeconds()}`;


