// Age
// Write a program that, given an age in seconds, calculates how old someone is in standard Earth years.
//
// Extensions
//
// Given an age in seconds, calculate how old someone would be on:
//
// Mercury: 0.2408467
// Venus: 0.61519726
// Mars: 1.8808158
// Jupiter: 11.862615
// Saturn: 29.447498
// Uranus: 84.016846
// Neptune: 164.79132
// An Earth year is roughly 365.25 days, or 31557600 seconds.

var solarSeconds = {

  spaceValues: {
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132,
    "Earth": 1
  },

  earthSeconds: function( seconds ){
    return  seconds / 31557600;
  },

  spaceSeconds: function( planet, seconds ){

    // Capitalizes the first letter of the planet variable,
    // lowercases the rest.

    planet = planet[0].toUpperCase()+planet.slice(1).toLowerCase();

    // We use earthSeconds to define base value - we always want to use
    // earth as our comparison.

    var baseValue = this.earthSeconds( seconds );

    // From there we divide our base value by our value returned by spaceValues.

    var spaceValue = baseValue / this.spaceValues[ planet ];

    return spaceValue;
  }

};
