// load doc.
$(document).ready(function(){

  // element assign
  const secondPointer = document.querySelector(".pointer-second");
  const minutePointer = document.querySelector(".pointer-minute");
  const hourPointer = document.querySelector(".pointer-hour");
  const secondSpan = document.querySelector("#secondSpan");
  const minuteSpan = document.querySelector("#minuteSpan");
  const hourSpan = document.querySelector("#hourSpan");

  // run 
  setInterval(getDate, 1000);
  getDate();

  // function
  function getDate(){
    // get date
    const date = new Date();
    // contant common vars
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    // format digital time
    var seconds00 = seconds.toString();
    var minutes00 = minutes.toString();
    var hours00 = hours.toString();
    if (seconds00.length < 2){
      seconds00 = "0" + seconds00;
    }
    if (minutes00.length < 2){
      minutes00 = "0" + minutes00;
    }
    if (hours00.length < 2){
      hours00 = "0" + hours00;
    }
    secondSpan.innerHTML = seconds00;
    minuteSpan.innerHTML = minutes00;
    hourSpan.innerHTML = hours00;
    // manipulate analog clock
    // handle seconds
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondPointer.style.transform = `rotate(${secondsDeg}deg)`;
    // avoid FX bug on transition > seconds pointer
    if (secondsDeg >= 444 || secondsDeg < 91){
      secondPointer.style.transition = "none";
    }
    else{
      secondPointer.style.transition = "all 0.05s";
    }

    // handle minutes
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutePointer.style.transform = `rotate(${minutesDeg}deg)`;
    // avoid FX bug on transition > minutes pointer
    if (minutesDeg >= 444 || secondsDeg < 91){
      minutePointer.style.transition = "none";
    }
    else{
      minutePointer.style.transition = "all 0.05s";
    }

    // handle hours
    const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourPointer.style.transform = `rotate(${hoursDeg}deg)`;
    // avoid FX bug on transition > minutes pointer
    if (hoursDeg >= 444 || secondsDeg < 91){
      hourPointer.style.transition = "none";
    }
    else{
      hourPointer.style.transition = "all 0.05s";
    }
  }

});
