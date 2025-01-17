// 1. The `json` variable is created
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const hours = document.querySelectorAll(".hours");
const previous = document.querySelectorAll(".previous");

// 2. The `fetch` request is made
fetch("/data.json")
  .then((response) => {
    // 3. The response returns
    return response.json();
  })
  .then((data) => {
    // // 4. The data is stored in the `json` variable
    // json = data;
    // data.forEach((item) => {
    //   console.log(item);
    // });

    // 5. Update the UI with the corresponding timeframes

    daily.addEventListener("click", function () {
      data.forEach((dt, i) => {
        hours[i].textContent = `${dt.timeframes.daily.current}hrs`;
        previous[
          i
        ].textContent = `Yesterday - ${dt.timeframes.daily.previous}hrs`;
      });
    });

    weekly.addEventListener("click", function () {
      data.forEach((dt, i) => {
        hours[i].textContent = `${dt.timeframes.weekly.current}hrs`;
        previous[
          i
        ].textContent = `Last Week - ${dt.timeframes.weekly.previous}hrs`;
      });
    });

    monthly.addEventListener("click", function () {
      data.forEach((dt, i) => {
        hours[i].textContent = `${dt.timeframes.monthly.current}hrs`;
        previous[
          i
        ].textContent = `Last Month - ${dt.timeframes.monthly.previous}hrs`;
      });
    });
  });
