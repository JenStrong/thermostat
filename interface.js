$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#powersaving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#powersaving-status').text('off')
    updateTemperature();
  })                        //why don't you put a ; here?

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
