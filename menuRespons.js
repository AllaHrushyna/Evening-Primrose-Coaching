
function myFunction() {
  var x = document.getElementById("nv");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
