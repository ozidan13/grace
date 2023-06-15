import nodemailer from "nodemailer";
import { emailTemplate } from "./ConfirmEmailTemplate.js";

const sendEmail = async ({ email }, password) => {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "graceproject2000@gmail.com",
      pass: "pgpgsuwhumtchxvf  ",
    },
  });
  let info = await transporter.sendMail({
    from: "graceproject2000@gmail.com",
    to: email,
    subject: "welcome 😀",
    html: emailTemplate(password),
  });


};

export { sendEmail };
