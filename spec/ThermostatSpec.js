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
  expect(thermostat.getTemp()).toEqual(10)
});
