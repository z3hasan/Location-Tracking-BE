var nodemailer = require('nodemailer');

var sender = 'z3hasan@outlook.com';

var smpt = {
  service: 'outlook',
  auth: {
    user: sender,
    pass: 'dy72Cn3a'
  }
};

var mailOptions = {
  from: sender,
  to: sender,
  subject: 'Geolocation',
  text: 'Email sent from geolocation app. (Default text)'
};

var transporter = nodemailer.createTransport(smpt);

var mailer = function(subject, text){
  console.log("Sending email");
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
