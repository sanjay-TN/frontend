const a = document.querySelector("#a");

setInterval(function () {
  const time = new Date();
  a.innerHTML = time.toLocaleTimeString();
  //   console.log(time.toLocaleTimeString());
}, 1000);
