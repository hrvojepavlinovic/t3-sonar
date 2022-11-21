export default function getCurrentDateTime(): string {
  // useless commented code
  // const currentTime = new Date(global.Date.now()).toISOString().replace(/T/, " ").replace(/\..+/, "");

  // eslint-disable-next-line no-var
  var currentTime = new Date(global.Date.now())
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  
  return currentTime;
}
