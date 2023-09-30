const transporter = require('../config/emailConfig');

async function send(destinationEmail, attachment) {
  const info = await transporter.sendMail({
    from: '"Reverse Geocode System 🌎" <naldson.bc@gmail.com>',
    to: destinationEmail,
    subject: "Arquivo com endereços 🗺️", 
    text: "Olá, segue em anexo o csv com os endereços de suas coordenadas.", 
    attachments: [
      {   
        filename: 'addresses.csv',
        content: attachment,
        encoding: 'base64'
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = send;