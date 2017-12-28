$(document).ready(function () {
				if ($(window).width() < 600){
					return;
				}
				else{
                var imageFile = ["url(img/cover5.JPG)","url(img/cover4.JPG)", "url(img/cover9.jpg)", "url(img/cover2.jpg)"];
                var currentIndex = 0;

              	setInterval(function () {
                    if (currentIndex == imageFile.length) {
                        currentIndex = 0;
                    }
                    $(".home-hero").css('background-image', imageFile[currentIndex++]).fadeIn(3000);
                }, 12000);
              
                
             }   
            });

$(window).resize(function () {
    if ($(window).width() < 600){
    	return
    }
    else{
    	$(window).scroll(function () {
    
    var topDivHeight = $(".home-about").height();
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - (viewPortSize / 2) >= triggerHeight) {
        $('.home-about-info').slideDown(1000);
        $('.home-about-img').slideDown(1000);
        $(this).off('scroll');
    }
});
    }
});

$(window).scroll(function () {
    
    var topDivHeight = $(".home-about").height();
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() - (viewPortSize / 2) >= triggerHeight) {
        $('.home-about-info').slideDown(1000);
        $('.home-about-img').slideDown(1000);
        $(this).off('scroll');
    }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

window.onload = function() {
    document.getElementById("custom").onclick = function fun() {
        openModal();
        //validation code to see State field is mandatory.  
    }
    document.getElementById("customclose").onclick = function fun() {
        closeModal();
        //validation code to see State field is mandatory.  
    }
    document.getElementById("prev").onclick = function fun() {
        plusSlides(-1);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("next").onclick = function fun() {
        plusSlides(1);
        //validation code to see State field is mandatory.  
    }
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}