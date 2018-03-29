var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        service: 'gmail',
            auth: {
                user: 'babanila2@gmail.com',
                pass:'babanila1985'
            }
    });

var mailOptions = {
        from: 'babanila2@gmail.com',
        to: 'babanila@yahoo.com',
        subject: 'Using Node.js to send email',
        text: 'Trying out new things bcos my God is able'
}

transporter.sendMail(mailOptions, function(err, info){
        if (err){
            console.log('Error, check your stuff');
        }
        else{
            console.log('Email Sent: ' + info.response);
        }

});