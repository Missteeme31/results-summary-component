const url = "data.json";
const metrics = document.querySelector(".metrics");

const getData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      incorporate(data);
    });
};

getData()


const incorporate = (data) => {
  const reverseData = data.reverse()
  console.log(reverseData)
  reverseData.forEach((ele, i) => {
    const reactions = `<div class="result-states ${ele.category.toLowerCase()}">
            <img src=${ele.icon} alt="reaction" />

            <p>${ele.category}</p>
            <p class="ratings">${ele.score} <span class="outOf">/ 100</span></p>
          </div>`;
    metrics.insertAdjacentHTML("afterend", reactions);
  });
};
