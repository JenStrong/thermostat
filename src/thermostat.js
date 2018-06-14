'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_POWER_SAVE_ON = 25;
  this.MAX_TEMP_POWER_SAVE_OFF = 32;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaximumTemperature()){
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn()){
    return this.temperature === this.MAX_TEMP_POWER_SAVE_ON;
  }
  else
    return this.temperature === this.MAX_TEMP_POWER_SAVE_OFF;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
};
