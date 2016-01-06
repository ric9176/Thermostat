function Thermostat() {
  "use strict";
  this.temp = DEFAULT_TEMP;
}

const DEFAULT_TEMP = 20;

Thermostat.prototype.increaseTemp = function (SetTemp) {
  this.temp = SetTemp;
};
