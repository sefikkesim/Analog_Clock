const hourHand = document.querySelector(".hand-hour");
const minuteHand = document.querySelector(".hand-minute");
const secondsHand = document.querySelector(".hand-seconds");

const getTime = () => {
  const now = new Date();

  let hours = now.getHours();
  
  if (hours > 12) {
    hours -= 12;
  }
  console.log(hours);
  const hoursDegree = ((hours / 60) * 360) ;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(hoursDegree);

  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90 ;
  minuteHand.style.transform = ` rotate(${minutesDegree}deg)`;
  //console.log(minutesDegree);

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  //console.log(hours);
  secondsHand.style.transform = ` rotate(${secondsDegree}deg)`;

  //console.log(secondsDegree);
};

setInterval(getTime, 1000);
getTime();
