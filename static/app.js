var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.height = "30vh";
    document.getElementById("im").style.height = "10vh";
    document.getElementById("im").style.width = "10vh";
    document.getElementById("titolo").style.fontSize = "2.5vh";
    document.getElementById("navbar").style.transition = "0.5s";
    document.getElementById("im").style.transition = "0.5s";
    document.getElementById("titolo").style.transition = "0.5s";
  } else {
    document.getElementById("navbar").style.height = "20vh";
    document.getElementById("im").style.height = "4vh";
    document.getElementById("im").style.width = "4vh";
    document.getElementById("titolo").style.fontSize = "1.5vh";
    document.getElementById("navbar").style.transition = "0.5s";
    document.getElementById("im").style.transition = "0.5s";
    document.getElementById("titolo").style.transition = "0.5s";
  }
  prevScrollpos = currentScrollPos;