const valueArray = [];

setInterval(generateBars, 500);
function generateBars() {
  const randoNumber = Math.round(Math.random() * 100);
  valueArray.push(randoNumber);
  if (valueArray.length > 20) {
    valueArray.shift();
    // list.removeChild(list.firstElementChild);
  }
  console.log(valueArray);
  renderChart();
}

function renderChart() {
  valueArray.forEach((element, index) => {
    document
      .querySelectorAll("li")
      [index].style.setProperty("--height", valueArray[index]);
  });
}
