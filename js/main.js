//language dropdown
window.onload=function(){
  var menuElem = document.getElementById('dropdown-menu'),
    titleElem = menuElem.querySelector('.title');
  document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
      if (target == menuElem) {
        if(elem.tagName == 'A') {
          titleElem.innerHTML = elem.textContent;
          titleElem.style.backgroundImage =  getComputedStyle(elem, null)['backgroundImage']
        }
        menuElem.classList.toggle('open')
        return;
      }
      target = target.parentNode;
    }
    menuElem.classList.remove('open');
  }
}

//menu
$(".navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
});


//menu close on menu item click
$(".navToggleClose").click(function() {
  $(".navBurger").removeClass("active");
  $(".overlay").removeClass("open");
  // this line ▼ prevents content scroll-behind
});


// Smooth scroll
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


//language dropdown icon rotation
// $( ".dropdown-menu" ).click(function() {
//   if (  $( this ).css( "transform" ) == 'none' ){
//     $(this).css("transform","rotate(30deg)");
//   } else {
//     $(this).css("transform","" );
//   }
// });
