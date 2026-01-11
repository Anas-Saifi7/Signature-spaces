import Contact from "../models/Contact.js";
import transporter from "../config/mail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Phone are required",
      });
    }
    await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    try {
      // Admin mail
      await transporter.sendMail({
        from: `"SignatureSpace Website" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Interior Consultation Request",
        html: `
          <h3>New Lead Received</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Service:</b> ${service}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      // Client mail
      await transporter.sendMail({
        from: `"SignatureSpace Studio Interiors" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting SignatureSpace",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <b>SignatureSpace Studio Interiors</b>.</p>
          <p>Our team will reach out to you shortly.</p>
          <br/>
          <p>Regards,<br/>SignatureSpace Team</p>
        `,
      });
    } catch (mailError) {
      // 🔥 EMAIL FAIL ≠ API FAIL
      console.error("MAIL ERROR (ignored):", mailError.message);
    }

    // ✅ 3. FINAL RESPONSE
    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
