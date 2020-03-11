function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  // var session = "AM";
  // if (h == 0) {
  //   h = 12;
  // }
  // if (h > 12) {
  //   h = h - 12;
  //   session = "PM";
  // }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  // var time = h + ":" + m + ":" + s + " " + session;
  var time = h + ":" + m + ":" + s;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  setTimeout(showTime, 1000);
}

function showWeather() {
  var now = new Date();
  var hour = now.getHours();

  if (hour >= 6 && hour < 12) {
    document.getElementById("weatherbox-one").classList.add('box-shadow');
    document.getElementById("btn-weather1").classList.add('weather-button');
  }
  else if (hour >= 12 && hour < 18) {
    document.getElementById("weatherbox-two").classList.add('box-shadow');
    document.getElementById("btn-weather2").classList.add('weather-button');
  }
  else if (hour >= 18 && hour < 24) {
    document.getElementById("weatherbox-three").classList.add('box-shadow');
    document.getElementById("btn-weather3").classList.add('weather-button');
  }
  else {
    document.getElementById("weatherbox-four").classList.add('box-shadow');
    document.getElementById("btn-weather4").classList.add('weather-button');
  }
}

function showNav() {
  var x = document.getElementById('menu-mobile');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else {
    x.style.display = 'none';
  }
}

window.onload = function() {
  showTime();
  showWeather();
}
// document.getElementsByClassName('div button').onclick = function(){
//   showNav();
// }
