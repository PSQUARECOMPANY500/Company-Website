import transporter from "./nodemailerSetup.js";
import dotenv from "dotenv";
dotenv.config();

const mailSender = async (from, message, to, subject) => {
  console.log(from)
  await transporter.sendMail({
    from,
    to,
    subject,
    html: message,
  });
};

export default mailSender;
