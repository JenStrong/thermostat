# Thermostat

## Overview
This is my first project using Javascript and jQuery. This project is a web app that mimics the behavior of a thermostat by allowing a user to increase and decrease the temperature and turn a power-saving-mode on and off.

This app originally included a feature that allowed a user to enter the name of city and the app would return the current temperature for that city. This functionality has been moved to a different project.

Key Learning Objectives from this Project:
  1. Using Jasmine to Test-Drive Development of a thermostat
  2. Using HTML/CSS to create a user interface on the web
  3. Using jQuery to build interactive functionality into a webpage

## How it Works



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

## Functionalities
The user can increase the temperature.
The user can decrease the temperature.
The user can reset the temperature.
The user can turn a power saving mode on and off.

## Logic
The thermostat is initialized at a default temperature of 20°C.
The minimum temperature is 10°C.
When power saving mode is on, the temperature can be increased to a maximum value of 25°C.
When power saving mode is off, the temperature can be increased to a maximum value of 32°C.
The energy usage is indicated as below:
  low-usage: 10°C - 17°C
  medium-usage: 18°C - 25°C
  high-usage: 26°C - 32°C
