describe('Thermostat', function() {
  var thermostat;
});

  beforeEach(function() {
    thermostat = new Thermostat();
  });

it('has a default temperature of 20', function() {
  expect(thermostat.temp).toEqual(20);
});

it('increases temp when button is pressed', function() {
  thermostat.increaseTemp(30);
  expect(thermostat.temp).toEqual(30);
});
