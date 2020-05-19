var mailService = require('../helpers/mailer');

// coordinates for my location
var mycoords = {
  latitude: 0,
  longitude: 0
};

var coords = function(req, res, next) {
  console.log("Running /location POST function...Preparing email");
/*
  mailService.mailer(distance(distance_calc(mycoords,{
    latitude: req.body.longitude,
    longitude: req.body.latitude
  }),""));*/
};

var error = function(req, res, next) {
  console.log("Running /location/error POST function...Preparing email");
  mailService.mailer("Error in getting location", error_message(req.body.error));
};

function distance_calc(myLocation, theirLocation){
  console.log("Calculating distance from your location")
  x = myLocation.latitude - theirLocation.latitude;
  y = myLocation.longitude - theirLocation.longitude;

  return Math.sqrt((x*x)+(y*y));
}

function distance(diff){
  if (isNaN(diff))
  {
    return "Distanace is NaN";
  }
  else if (diff > 1) {
    return "At least 60 minutes away";
  }
  else if (diff > .70){
    return "Less than 55 minutes away.";
  }
  else if (diff > .3){
    return "LESS THAN 25 MINS AWAY";
  }
  else {
    return "ALMOST HOME";
  }
}

function error_message(error_code){
  switch(error_code) {
    case 0:
      message = "Geolocation is not supported by the browser.";
      break;
    case 1:
      message = "Permission Denied:	The acquisition of the geolocation information failed because the page didn't have the permission to do it.";
      break;
    case 2:
      message = "Position Unavailable:	The acquisition of the geolocation failed because at least one internal source of position returned an internal error.";
      break;
    case 3:
      message = "Timeout:	The time allowed to acquire the geolocation was reached before the information was obtained."
      break;
    default:
      message = "An unknown error occurred when running geolocation api";
  }
  console.log(message);
  return message;
}


exports.coords = coords;
exports.error = error;
