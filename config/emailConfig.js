const nodemailer = require('nodemailer');

const emailVariables = require('./emailVariables');

const transporter = nodemailer.createTransport({
  host: emailVariables.host,
  port: emailVariables.port,
  // secure: true,
  auth: {
    user: emailVariables.user,
    pass: emailVariables.password,
  },
});

module.exports = transporter;
