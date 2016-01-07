$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temp').text(thermostat.temp);

  $('#temp-up').click(function() {
    thermostat.increaseTemp();
    $('#temp').text(thermostat.temp);
  });

  $('#temp-down').click(function() {
    thermostat.decreseTemp();
    $('#temp').text(thermostat.temp);
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    $('#temp').text(thermostat.temp);
  });
});
