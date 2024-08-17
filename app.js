let userInput = document.getElementById("input");
userInput.max = new Date().toISOString().split("T")[0];
let output = document.getElementById("output");
let outputDiv = document.getElementById("res");
function calculateAge() {
  let birthDate = new Date(userInput.value);
  //d1 = User BirthDate
  //m1 = User BirthMonth
  //y1 = User BirthYear

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  //   console.log(m1);

  //d2 = Current Date
  //m2 = Current Month
  //y2 = Current Year
  let todayDate = new Date();
  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  //to save year month and day difference
  let d3, m3, y3;

  //    Year Calculate
  if (y2 >= y1) {
    y3 = y2 - y1;
    // y3--;
  }
  //   console.log(" Year will be :" + y3);

  //    Month Calculate
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  //   console.log("Month will be:" + m3);

  // Date Calculate
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    d3 = exactDate(y1, m1) + d2 - d1;
  }
  function exactDate(year, month) {
    return new Date(year, month, 0).getDate();
  }
  //   console.log("Days will be : " + d3);

  let result = `Your Age will be ${y3} years ${m3} months ${d3} days.`;

  output.innerHTML = result;
  outputDiv.style.display = "block";
}
