function checkPassword() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
  
    if (num1 === "9" && num2 === "1" && num3 === "1") {
      document.getElementById("message").innerText = "Password 1 correcta";
    } else if (num1 === "7" && num2 === "1" && num3 === "4") {
      document.getElementById("message").innerText = "Password 2 correcta";
    } else {
      document.getElementById("message").innerText = "Password incorrecta";
    }
  }