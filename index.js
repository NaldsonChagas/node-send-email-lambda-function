require('dotenv').config();

const emailSender = require('./email/sender');

exports.handler = async (event) => {
    const { destinationEmail = '', attachment = ''} = event;
    
    if (!attachment || !destinationEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Bad Request',
        }),
      };
    }

    try {
      await emailSender(destinationEmail, attachment);
      return {
        statusCode: 200,
        body: JSON.stringify('Email sent successfully'),
      };
    } catch (e) {
        console.log({e})
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Cannot send email',
        }),
      };
    }
};
