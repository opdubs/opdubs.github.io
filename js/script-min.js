var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,l=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<n.length;s++)n[s].className=n[s].className.replace(" active","");l[slideIndex-1].style.display="block",n[slideIndex-1].className+=" active"}function changeImg(e){document.getElementsByClassName("imgDisp").src=e}showSlides(slideIndex);