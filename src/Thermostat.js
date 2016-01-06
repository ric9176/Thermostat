(function(){
  'use strict';
}());

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSave = true;
  this.maxTemp = 25;
}

const DEFAULT_TEMP = 20;


Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.isMinTemp = function(){
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.increaseTemp = function() {
  this.temp += 1;
};

Thermostat.prototype.decreseTemp = function(){
  if (this.isMinTemp()) {
    return;
  }
  this.temp -= 1;
};

Thermostat.prototype.isPowerSaveOn = function() {
  return this.powerSave === true;
};

Thermostat.prototype.turnPowerSaveOff = function () {
  this.powerSave = false;
  this.maxTemp = 32;
};
