// jquery test
$(document).on('ready', () => {
  // console.log('sanity check!');

  $('#nav li a').click(function() {
    // document.querySelector('.hello').scrollIntoView({
    //   behavior: 'smooth'
    // });
    // console.log('hit');
      var $this = $(this);
      $('li a.active').removeClass('active');
      $(this).addClass('active')
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  $('.toggle-info').click(function(){
    console.log('toggle-info hit');
    $(this).text(function(i,old){
        return old=='Less info' ?  'More info' : 'Less info';
    });
  });
});

// es6 test
const PI = 3.14;

// mocha test
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
