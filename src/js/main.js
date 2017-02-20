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


});

// es6 test
const PI = 3.14;

// mocha test
function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
