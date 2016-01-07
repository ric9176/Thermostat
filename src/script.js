$(document).ready(function() {
  $('#temp-up').click(function() {
    $('#temp-up').text('fjghdjgfg');
    // $('div').animate({color:'red'},1000);

  });
  $('#temp-up').mouseover(function() {
    $('#temp-up').text('Hello!');
  });
  $('#temp-up').mouseout(function() {
    $('#temp-up').text('Goodbye!');
  });
  $('#PSM-on').click(function() {
    $('#div1').fadeIn(1000);
    $('#div2').fadeIn(2000);
    $('#div3').fadeIn(3000);
  });
  $('#div1').mouseover(function() {
    $('#hello').css({'color': 'red', 'font-size': '150%'});
  });
  $('#div3').click(function() {
      $('#div3').css('display','none');
  });
});
