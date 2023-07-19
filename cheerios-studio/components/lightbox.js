function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
  
    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    captionText.innerHTML = dots[n - 1].alt;
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }