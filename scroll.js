// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar-taal-right").style.padding = "30px 10px";
    document.getElementById("navbar-logo").style.fontSize = "70%";
    document.getElementById("nv").style.paddingTop = "140px";
    
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar-taal-right").style.padding = "60px 10px";
    document.getElementById("navbar-logo").style.fontSize = "100%";
    document.getElementById("nv").style.paddingTop = "200px";
   
  }
}