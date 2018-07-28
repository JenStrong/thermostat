# Thermostat

## Overview
This is my first project using Javascript and jQuery. This project is a web app that mimics the behavior of a thermostat by allowing a user to increase and decrease the temperature and turn a power-saving-mode on and off.

This app originally included a feature that allowed a user to enter the name of city and the app would return the current temperature for that city. This functionality has been moved to a different project.

Key Learning Objectives from this Project:
  1. Using Jasmine to Test-Drive Development of a thermostat
  2. Using HTML/CSS to create a user interface on the web
  3. Using jQuery to build interactive functionality into a web page

## How it Works
![alt text](https://github.com/JenStrong/thermostat/blob/master/public/gif/thermostat.gif)

## Running the App
  Use Ruby 2.5.1
```
 $ git clone https://github.com/JenStrong/thermostat.git
 $ cd thermostat
 $ bundle install
 $ open index.html
```

## Running Tests
```
$ cd thermostat
$ open SpecRunner.html
```

## Test Coverage
![alt text](https://github.com/JenStrong/thermostat/blob/master/public/images/test_coverage.png)

## Functionalities
The user can increase the temperature.<br>
The user can decrease the temperature.<br>
The user can reset the temperature.<br>
The user can turn a power saving mode on and off.<br>


## Logic
The thermostat is initialized at a default temperature of 20°C.<br>
The minimum temperature is 10°C. <br>
When power saving mode is on, the temperature can be increased to a maximum value of 25°C.<br>
If power saving mode is turned on when current setting is above 25°C, the thermostat will reset to the maximum power saving mode value of 25°C.<br>
When power saving mode is off, the temperature can be increased to a maximum value of 32°C.<br>
The energy usage is indicated as below:<br>
  * low-usage: 10°C - 17°C<br>
  * medium-usage: 18°C - 25°C<br>
  * high-usage: 26°C - 32°C<br>

## User Stories

```
As a user
So that I can set the temperature
I want a thermostat that starts at 20 degrees
```

```
As a user
So that I can adjust the temperature
I want my thermostat to have an up and down button
```

```
As a user
So that it can't get too cold
My thermostat should have a minimum temperature of 10 degrees
```

```
As a user
So that I don't have to remember to turn on power saving mode
My thermostat should have a power saving mode (PSM), which is on by default
```

```
As a user
So that I can reduce my energy consumption
I want PSM to cap the temperature at 25 degrees when switched on
```

```
As a user
So that I can be extra warm
I want PSM to increase the maximum temperature to 32 degrees when switched off
```

```
As a user
So that I can reset the temperature
I want a reset button that sets the temperature to 20 degrees
```

```
As a user
So I can monitor my energy usage
I want the thermostat to tell me whether the current energy usage is low (<18 degrees), medium (18-25 degrees) or high (>25 degrees)
```

```
As a user
So that I can see whether power saving mode is on
I want the thermostat to indicate whether power saving mode is on or off
```
