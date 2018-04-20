// Direct Email sending with security
var nodemailer = require('nodemailer');
var nconf = require('nconf');

nconf.argv().file({file: __dirname + '/config.json'});
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: nconf.get('GMAIL_USER'),
        pass: nconf.get('GMAIL_PASS')
    }
});

var mailDetails = {
    from: nconf.get('GMAIL_USER'),
    to: nconf.get('RECEIVER'),
    subject: 'Using Node.js to send email',
    text: 'Trying out new things bcos my God is able. Programming is sweet'
};

transporter.sendMail(mailDetails, function(err, data){
    if (err){
        console.log('Error, check your stuff');
    }
    else{
        console.log('Email Sent: ' + data.response);
    }
});


/*
// Direct Email sending without security
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxxxxxxxxx@gmail.com',
        pass: 'xxxxxxxxxx'
    }
});

var mailDetails = {
    from: 'xxxxxxxxxx@gmail.com',
    to: 'xxxxxxxxxx@yahoo.com',
    subject: 'Using Node.js to send email',
    text: 'Trying out new things bcos my God is able. Programming is sweet '
};

transporter.sendMail(mailDetails, function(err, data){
    if (err){
        console.log('Error, check your stuff');
    }
    else{
        console.log('Email Sent: ' + data.response);
    }
});
*/

