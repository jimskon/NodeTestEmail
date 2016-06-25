/* Test program for sendmail */

var sendmail = require('./sendmail');

sendmail.sendhtml("skon@mvnu.edu;camdeardorff@mail.mvnu.edu", "A test email", "<b>Hi Cam!<br>This is a test email sent from a nod<e.js application I wrote.  It is coming from the new gmail account for LIMRI.</b><br>Jim Skon");