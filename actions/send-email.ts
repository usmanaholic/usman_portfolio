"use server"

import { createTransport } from "nodemailer"

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendEmail(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all fields",
    }
  }

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "usmansinghi786@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

