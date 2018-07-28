$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function(){
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
    updateTemperature();
    $('#powersaving-on').addClass("selected");
    $('#powersaving-off').removeClass("selected");
    $('#icon').show();
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
    $('#powersaving-off').addClass("selected");
    $('#powersaving-on').removeClass("selected");
    $('#icon').hide();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
