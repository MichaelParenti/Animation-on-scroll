window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("back").style.animation = "move 3s linear infinite";
  } 
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("back2").style.animation = "move 3s linear infinite";
  } 
}
