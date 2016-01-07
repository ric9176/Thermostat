$(document).ready(function() {
  var thermostat = new Thermostat();
  refreshPowerStatus();
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

  $('#PSM-on').click(function() {
    thermostat.turnPowerSaveOn();
    refreshPowerStatus();
  });

  $('#PSM-off').click(function() {

    thermostat.turnPowerSaveOff();
    refreshPowerStatus();
  });

function refreshPowerStatus() {
  if(thermostat.isPowerSaveOn()){
    $('#power-saving-status').text('on');
  } else {
    $('#power-saving-status').text('off');
  }
}

});
