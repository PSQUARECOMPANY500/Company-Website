import express from "express";
import contactForm from "../../Controllers/ContactUs/contactController.js";

const router = express.Router();

router.post("/contact-us", contactForm);

export default router;
