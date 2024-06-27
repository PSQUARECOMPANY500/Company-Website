import mongoose from "mongoose";
import mailSender from "../../NodeMailer/mailer.js";
import dotenv from "dotenv";
dotenv.config();

const ContactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    projectDesc: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

ContactUsSchema.post("save", async (doc, next) => {
  try {
    // await mailSender(`PSQUARE COMPANY <${process.env.EmailAddress}>`, "You got the email", doc.email, "Contact Us");
    const message = `
    from: ${doc.email},<br>
    fullName: ${doc.name}<br>
    projectDesc: ${doc.projectDesc}<br>
    budget: ${doc.budget}
  `

    await mailSender(doc.email, message, process.env.EmailAddress, "Contact Us");
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);

export default ContactUs;