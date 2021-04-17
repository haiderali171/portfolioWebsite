$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});

$(document).ready(function() {
  $('.drawer').drawer();
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 

openNav()

closeNav()

/*$(window).resize(function(){
  var width = $("body").width();
  if(width <= 640){
      $("#root header .top-nav").css({
        'width' : '50%',
        'height' : '50%'
     });    
  }
});*/
