

var nodemailer = require('nodemailer');
var nconf = require('nconf');

nconf.file({file: 'config.json'}).env();
//nconf.argv().file({file: __dirname + 'config.json'});

var transporter = nodemailer.createTransport({
        service: 'gmail',
            auth: {
                user: nconf.get('GMAIL_USER'),
                pass: nconf.get('GMAIL_PASS')
            }

    });

var mailOptions = {
        from: nconf.get('SENDER'),
        to: nconf.get('RECEIVER'),
        subject: 'Using Node.js to send email',
        text: 'Programming is sweet to learn, trying out new things bcos my God is able'
};


transporter.sendMail(mailOptions, function(err, data){
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
        user: 'xxxxxxxx@gmail.com',
        pass: 'xxxxxxxxxxx'
    }
});

var mailOptions = {
    from: 'xxxxxxxxx@gmail.com',
    to: 'xxxxxxxx@yahoo.com',
    subject: 'Using Node.js to send email',
    text: 'Trying out new things bcos my God is able. Programming is sweet '
};

transporter.sendMail(mailOptions, function(err, data){
    if (err){
        console.log('Error, check your stuff');
    }
    else{
        console.log('Email Sent: ' + data.response);
    }
});
*/