const express = require("express") ;

const nodemailer = require("nodemailer") ;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "collinskirui23@gmail.com",
    pass: "mfendvysocqlicuc",
  },
});

 const submitForm = async (req ,res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "collinskirui23@gmail.com", // Change this to your desired email address
    subject: message.slice(0, 50),
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
  };
  try {
    if (!email || !name || !message) {
      throw Error("All fields are required");
    }
    const info = await transporter.sendMail(mailOptions);
    res.json({ message: "Email Sent", info });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log(error);
  //       return res.status(500).send({ error: error.message });
  //     } else {
  //       console.log({ name, email, message });
  //       console.log("Email sent: " + info.response);
  //       res.status(200).json({ message: "Email Sent" });
  //     }
  //   });
};


module.exports = {submitForm}
