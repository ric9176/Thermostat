$(document).ready(function() {
  var thermostat = new Thermostat();
  refreshPowerStatus();
  refreshTemp();

  $('#temp-up').click(function() {
    thermostat.increaseTemp();
    refreshTemp();
  });

  $('#temp-down').click(function() {
    thermostat.decreseTemp();
    refreshTemp();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    refreshTemp();
  });

  $('#PSM-on').click(function() {
    thermostat.turnPowerSaveOn();
    refreshPowerStatus();
    refreshTemp();
  });

  $('#PSM-off').click(function() {
    thermostat.turnPowerSaveOff();
    refreshPowerStatus();
    refreshTemp();
  });

  function refreshPowerStatus() {
    if(thermostat.isPowerSaveOn()){
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  }

  function refreshTemp() {
    $('#temp').text(thermostat.temp);
    $('h1').attr('class', thermostat.energyUsage());
  }

  $.getJSON('http://api.wunderground.com/api/12a2d3bf53a24799/conditions/q/UK/London.json').done(function(json) {
    $('#api').text(json.current_observation.temp_c);
  });
});
