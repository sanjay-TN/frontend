const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || isNaN(height) || height < 0) {
    result.innerHTML = `enter correct value instead of ${height}`;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    result.innerHTML = `enter correct value instead of ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>BMI value is under weight : ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>BMI value is normal : ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>BMI value is over weight : ${bmi}</span>`;
    }
  }
});
