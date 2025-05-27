// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-taal-right").style.padding = "30px 10px";
    document.getElementById("navbar-logo").style.fontSize = "25px";
    document.getElementById("nl").style.fontSize = "15px";
    document.getElementById("fr").style.fontSize = "15px";
    document.getElementById("en").style.fontSize = "15px";
    document.getElementById("nv").style.paddingTop = "190px";
    
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar-taal-right").style.padding = "60px 10px";
    document.getElementById("navbar-logo").style.fontSize = "35px";
    document.getElementById("nl").style.fontSize = "25px";
    document.getElementById("fr").style.fontSize = "25px";
    document.getElementById("en").style.fontSize = "25px";
    document.getElementById("nv").style.paddingTop = "270px";
   
  }
}