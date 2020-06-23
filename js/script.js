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

var image_tracker = 'graph1';

function swap() {
  // var graph1 = document.getElementsByClassName('graph1');
  //     graph1 = graph1.src;
  // var graph2 = document.getElementsByClassName('graph2');
  //     graph2 = graph2.src;
  // var graph3 = document.getElementsByClassName('graph3');
  //     graph3 = graph3.src;
  // var graph4 = document.getElementsByClassName('graph4');
  //     graph4 = graph4.src;
  var graph = document.getElementsByClassName('graphimg');
  if(image_tracker=='graph1'){
     graph.src= "../media/graph1.png";
     image_tracker='graph1';
     }
     else if(image_tracker=='graph2'){
     graph.src='../media/graph2.png';
     image_tracker='graph2';
     }
     else if(image_tracker=='graph3'){
     graph.src='../media/graph3';
     image_tracker='graph3';
     }
     else if(image_tracker=='graph4'){
     graph.src='../media/graph4';
     image_tracker='graph4';
     }

}
