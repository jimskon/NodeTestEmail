/* 
 * A simple sendmail component for Node.js
 * Uses nodemailer plus XOAuth2 to send emails via a gmail account
 * By James Skon, June 2016
 */

var nodemailer = require("nodemailer");

module.exports = {
    sendhtml: function (recipients, subject, htmlcontent) {

        var mailOptions = {
            from: "lifeinmotionresource@gmail.com",
            to: recipients,
            subject: subject,
            generateTextFromHTML: true,
            html: htmlcontent
        };


        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log(response);
            }
            smtpTransport.close();
        });
    }

}
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        XOAuth2: {
            user: "lifeinmotionresource@gmail.com", // Your gmail address.
            // Not @developer.gserviceaccount.com
            clientId: "xyzzy.apps.googleusercontent.com",
            clientSecret: "xyzzy",
            refreshToken: "xyzzy"
        }
    }
});





