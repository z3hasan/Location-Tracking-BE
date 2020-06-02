var nodemailer = require('nodemailer');
var config = require('./mailer-config');

var sender = config.email;

var mailer = function(subject, text){

  console.log("Sending email");
  var smpt = {
    service: config.service,
    auth: {
      user: sender,
      pass: config.password
    }
  };

  var mailOptions = {
    from: sender,
    to: sender,
    subject: 'Geolocation',
    text: 'Email sent from geolocation app. (Default text)'
  };

  var transporter = nodemailer.createTransport(smpt);

  mailOptions.subject += ` ${subject}`;
  mailOptions.text = text;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.mailer = mailer;
