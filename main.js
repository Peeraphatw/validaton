const myform = document.getElementById("myform");
var validStatus = true;

const validation = () => {
  const inputs = [];
  inputs[0] = document.getElementById("inputName");
  inputs[1] = document.getElementById("inputAge");
  inputs[2] = document.getElementById("inputAddress");
  inputs[3] = document.getElementById("inputZip");

  inputs.forEach((input) => {
    switch (input.id) {
      case "inputName":
        if (!/^[A-Za-z]+$/.test(input.value)) {
          validStatus = false;
          alert("Please enter a valid name");
        }
        break;
      case "inputAge":
        if (input.value < 18 || input.value > 150) {
          validStatus = false;
          alert("Please enter a valid age");
        }
        break;
      case "inputAddress":
        if (input.value == null) {
          validStatus = false;
          alert("Please enter a valid address");
        }
        break;
      case "inputZip":
        if (!/^\d{5}(?:[-\s]\d{4})?$/.test(input.value)) {
          validStatus = false;
          alert("Please enter a valid Zipcode");
        }
        break;
      default:
    }
  });
};

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
  if (validStatus) {
    myform.submit();
  }
});
