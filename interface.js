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
    $(this).toggleClass( "selected" );
    $('#powersaving-off').toggleClass("selected");
    $('#powersaving-status').append('<i class="fa fa-circle"></i>')
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
    $(this).toggleClass( "selected" );
    $('#powersaving-on').toggleClass("selected");
    $('#powersaving-status').find('i').remove();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
