//Get the button:
topButton = document.getElementById("toTop");
// scrollArrow = document.getElementById("arrowAnim");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
  // scrollArrow()
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
    // scrollArrow.style.display = "none";

  } else {
    topButton.style.display = "none";
    // scrollArrow.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// var shiftWindow = function() { scrollBy(0, -50) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);



//window.onscroll = scrollArrow();

// function scrollArrow() {
//   console.log("Scrolling")
//   if (document.body.scrollTop > 400) {
//     scrollArrow.style.display = "none";
//   } else {
//     scrollArrow.style.display = "block";
//   }
// }

