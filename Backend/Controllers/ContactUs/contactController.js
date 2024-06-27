import ContactUs from "../../Modals/Contact/ContactUsSchema.js";

const contactForm = async (req, res) => {
  try {
    const { name, email, projectDesc, budget } = req.body;
    console.log(req.body);

    if (!name || !email || !projectDesc || !budget) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const newContact = new ContactUs({
      name,
      email,
      projectDesc,
      budget,
    });
    await newContact.save();
    return res
      .status(200)
      .json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export default contactForm;
