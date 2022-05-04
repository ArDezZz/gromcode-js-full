function getDiff(startDate, endDate) {
  var delta = Math.abs(endDate - startDate) / 1000;

  let days = Math.floor(delta / 86400);
  delta -= days * 86400;

  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  let seconds = Math.round(delta % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
console.log(getDiff(new Date(2001, 1, 18, 03, 05, 16), new Date(2022, 3, 29)));
