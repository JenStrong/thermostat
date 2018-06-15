$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=3c4637f8334e84b45a1b5e450fae1ab0';
    var units = '&units=imperial';
    $.get(url + token +units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  };

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
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
