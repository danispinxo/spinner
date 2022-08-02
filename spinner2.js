let spinnerText = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < spinnerText.length; i++) {
  let count = i;
  setTimeout( () => {
    process.stdout.write(spinnerText[count]);
  }, 100 * (count + 1));
};

setTimeout( () => {
  console.log('\n');
}, 100 * (spinnerText.length + 1));
