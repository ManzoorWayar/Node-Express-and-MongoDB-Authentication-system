import nodemailer from "nodemailer";

const sendMail = async (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "softwareengineerwayar@gmail.com",
      pass: "jwhvqmyiuanvgxnm",
    },
  });

  let mailOptions = {
    from: "softwareengineerwayar@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  return await transporter.sendMail(mailOptions);
};

export default sendMail;
