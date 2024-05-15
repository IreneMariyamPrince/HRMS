/* eslint-env es6 */
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

dotenv.config()
const createTransporter=()=> {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    logger:true,
    debug:true,
    secureConnection: false,
    // secure:false, // use SSL
    auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD
    },
    tls: {
      rejectUnauthorized: true
    }
    
  });
}

module.exports = { createTransporter };
