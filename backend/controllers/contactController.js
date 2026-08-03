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
        from: `"Signature Space Studio Interiors" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `🏠 New Interior Design Lead | ${name}`,
        html: `
     <div style="max-width:700px;margin:auto;background:#f8f8f8;padding:30px;font-family:Arial,sans-serif;">

    <div style="background:#b88c4a;color:white;padding:25px;text-align:center;border-radius:12px 12px 0 0;">
      <h1 style="margin:0;">🏠 Signature Space Studio Interiors</h1>
      <p style="margin-top:10px;">New Customer Inquiry</p>
    </div>

    <div style="background:white;padding:30px;border-radius:0 0 12px 12px;">

      <h2 style="color:#b88c4a;">Customer Details</h2>

      <table style="width:100%;border-collapse:collapse;">

        <tr>
          <td style="padding:10px;font-weight:bold;">👤 Name</td>
          <td>${name}</td>
        </tr>

        <tr>
          <td style="padding:10px;font-weight:bold;">📧 Email</td>
          <td>${email}</td>
        </tr>

        <tr>
          <td style="padding:10px;font-weight:bold;">📱 Phone</td>
          <td>${phone}</td>
        </tr>

        <tr>
          <td style="padding:10px;font-weight:bold;">🛋 Service</td>
          <td>${service || "Not Selected"}</td>
        </tr>

        <tr>
          <td style="padding:10px;font-weight:bold;">💬 Message</td>
          <td>${message || "No Message"}</td>
        </tr>

      </table>

      <hr>

      <p><b>Submitted:</b> ${new Date().toLocaleString()}</p>

    </div>

  </div>
  `,
      });
      console.log("Customer Email =>", email);
      // Client mail

      await transporter.sendMail({
        from: `"Signature Space Studio Interiors" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "✨ Thank You for Contacting Signature Space Studio Interiors",
        html: `
       <div style="max-width:700px;margin:auto;background:#f5f5f5;padding:35px;font-family:Arial,sans-serif;">

       <div style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.08);">
       <div style="background:#b88c4a;color:white;padding:35px;text-align:center;">

       <h1 style="margin:0;">
        🏠 Signature Space Studio Interiors
       </h1>

      <p style="margin-top:10px;">
     Premium Interior Design & Custom Furniture
     </p>

  </div>

      <div style="padding:35px;">
         <h2>Hello ${name} 👋</h2>
         <p style="font-size:16px;line-height:30px;color:#555;">Thank you for contacting
         <b>Signature Space Studio Interiors.</b>
         We have successfully received your inquiry.
        Our design consultant will contact you shortly.
       </p>

     <hr style="margin:30px 0;">
       <h3 style="color:#b88c4a;">Why Choose Us?</h3>
       <ul style="line-height:35px;color:#555;">
       <li>✔ 28+ Years Experience</li>
       <li>✔ Premium Interior Design</li>
       <li>✔ Modular Kitchen Experts</li>
       <li>✔ Custom Furniture Manufacturing</li>
       <li>✔ Pan India Service</li>

      </ul>

      <div style="text-align:center;margin-top:35px;">

    <a
   href="https://signature-spaces.vercel.app"
  style="background:#b88c4a;
   color:white;
  padding:15px 35px;
  text-decoration:none;
  border-radius:30px;
  font-weight:bold;
 display:inline-block;
 ">
 Visit Our Website
</a>

</div>

<div style="margin-top:40px;text-align:center;color:#555;">

<p>📞 +91 7668014201</p>

<p>📧 signaturespace4@gmail.com</p>

<p>📍 New Delhi • Pan India</p>

</div>

</div>

</div>

</div>
`,
      });
    } catch (mailError) {
      // 🔥 EMAIL FAIL ≠ API FAIL
      console.error("MAIL ERROR (ignored):", mailError.message);
    }

    console.log("✅ Client Mail Sent");

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
