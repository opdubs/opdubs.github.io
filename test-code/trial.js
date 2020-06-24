var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// var image_tracker = 'graph1';
//
// function changeImg(imgName) {
//   image = document.getElementsByClassName('imgDisp');
//   image.src = imgName;
// }
function changeImg(imgName) {
  var element = document.getElementsByClassName("active");
  element.classList.toggle("active");
  imgName.classList.toggle("active")
}
//
//
//
var graphIndex = 1;
showGraph(graphIndex);

// Graph Image Associated w Button
function nextGraph(n) {
  showGraph(graphIndex == n);
}

// Thumbnail image controls
function currentGraph(n) {
  showGraph(graphIndex = n);
}

function showGraph(n) {
  var i;
  var graphs = document.getElementsByClassName("myGraphs");
  if (n > graphs.length) {graphIndex = 1}
  if (n < 1) {graphIndex = graphs.length}
  for (i = 0; i < graphs.length; i++) {
      graphs[i].style.display = "none";
  }
  graphs[graphIndex-1].style.display = "block";
}
