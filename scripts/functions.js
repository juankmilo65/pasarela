function setValue(value) {
  var form = document.getElementById("form1");
  var centValue = value * 100;
  console.log(form.elements.ammountName);
  console.log(centValue);

  return centValue;
}
