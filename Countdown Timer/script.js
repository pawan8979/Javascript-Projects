const endDate = "27 SEPTEMBER 2023 12:00 AM";
document.querySelector("#end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const current = new Date();
  const diff = (end - current) / 1000;
  console.log(diff);

  if(diff < 0) return; //if negative stop

  inputs[0].value = Math.floor(diff / 3600 / 24); // days
  inputs[1].value = Math.floor(diff / 3600) % 24; //hours
  inputs[2].value = Math.floor(diff / 60) % 60; //minutes
  inputs[3].value = Math.floor(diff) % 60; //seconds
};

setInterval(() => clock(), 1000);

/*
 * 1 day= 24 hrs
 * 1 hr = 60 mins
 * 1 min = 60 sec
 */
