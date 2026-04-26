const button = document.querySelectorAll(".button");
// console.log(button);

const body = document.querySelector("body");
// console.log(body);

button.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", function (c) {
    console.log(c);
    console.log(c.target);
    // if (c.target.id === "grey") {
    //   body.style.backgroundColor = c.target.id;
    // }
    // if (c.target.id === "white") {
    //   body.style.backgroundColor = c.target.id;
    // }
    // if (c.target.id === "blue") {
    //   body.style.backgroundColor = c.target.id;
    // }
    // if (c.target.id === "yellow") {
    // body.style.backgroundColor = c.target.id;

    switch (c.target.id) {
      case "grey":
        body.style.backgroundColor = c.target.id;
        break;
      case "white":
        body.style.backgroundColor = c.target.id;
        break;
      case "blue":
        body.style.backgroundColor = c.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = c.target.id;
        break;
    }
    // }
  });
});
