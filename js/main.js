$(document).ready(function () {
                var imageFile = ["url(img/cover5.JPG)","url(img/cover4.JPG)", "url(img/cover9.jpg)", "url(img/cover2.jpg)"];
                var currentIndex = 0;

              	setInterval(function () {
                    if (currentIndex == imageFile.length) {
                        currentIndex = 0;
                    }
                    $(".home-hero").css('background-image', imageFile[currentIndex++]).fadeIn(3000);
                }, 12000);
                
                
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
