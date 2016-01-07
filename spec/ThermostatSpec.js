(function(){
  'use strict';
}());

describe('Thermostat', function() {
  var thermostat;
});

  beforeEach(function() {
    thermostat = new Thermostat();
  });

it('has a default temperature of 20', function() {
  expect(thermostat.temp).toEqual(20);
});

it('returns current temp', function() {
  expect(thermostat.getTemp()).toEqual(thermostat.temp);
});

it('increases temp when button is pressed', function() {
  thermostat.increaseTemp(1);
  expect(thermostat.getTemp()).toEqual(21);
});

it('button decreases temp', function(){
  thermostat.decreseTemp(1);
  expect(thermostat.getTemp()).toEqual(19);
});

it('min temp cannot be below 10', function(){
  for(var i = 0; i < 11; i ++){
    thermostat.decreseTemp();
  }
  expect(thermostat.getTemp()).toEqual(10);
});

it('has power save mode on by default', function() {
  expect(thermostat.isPowerSaveOn()).toBe(true);
});

it('can turn power save mode off', function() {
  thermostat.turnPowerSaveOff();
  expect(thermostat.isPowerSaveOn()).toBe(false);
});

it('can turn power save mode back on', function() {
  thermostat.turnPowerSaveOff();
  expect(thermostat.isPowerSaveOn()).toBe(false);
  thermostat.turnPowerSaveOn();
  expect(thermostat.isPowerSaveOn()).toBe(true);
});


it('when power save mode is off, max temp is 32', function() {
  thermostat.turnPowerSaveOff();
  expect(thermostat.maxTemp).toEqual(32);
});

it('reset button returns temp to 20', function(){
  thermostat.increaseTemp();
  thermostat.reset();
  expect(thermostat.temp).toEqual(DEFAULT_TEMP);
});

describe('Edge case for max temp', function() {
  it ('if current temp > 25, power save sets it to 25', function(){
          thermostat.turnPowerSaveOff();
          for(i = 0; i < 9; i++) { thermostat.increaseTemp(); }
          thermostat.turnPowerSaveOn();
          expect(thermostat.temp).toEqual(25);
  });
});

describe('Power save mode on', function(){

  it('when power save mode is on, max temp is 25', function() {
    expect(thermostat.maxTemp_PSM_ON).toEqual(25);
  });

  it('cannot go above 25', function(){
    for(var i = 0; i < 6 ; i ++){
      thermostat.increaseTemp();
    }
    expect(thermostat.getTemp()).toEqual(25);
  });

});

describe('Power save mode off', function(){

  beforeEach(function(){
      thermostat.turnPowerSaveOff();
    });

  it('when power save mode is on, max temp is 32', function() {
    expect(thermostat.maxTemp_PSM_OFF).toEqual(32);
  });

  it('cannot go above 32', function(){
    for(var i = 0; i < 13 ; i ++){
      thermostat.increaseTemp();
    }
    expect(thermostat.getTemp()).toEqual(32);
  });

});

describe('display power usage levels', function() {
  describe('when the temp is below 18 degs', function() {
    it('it is considered low-usage', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.decreseTemp();
    }
    expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temp is between 18 and 25 degs', function () {
    it('it is condisdered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temp is something else', function () {
    it('it is considered high-usage', function() {
      thermostat.powerSave = false;
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
