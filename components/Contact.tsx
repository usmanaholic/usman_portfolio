"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "@/actions/send-email"
import { useFormStatus } from "react-dom"
import { toast } from "sonner"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full btn-glow group bg-transparent hover:bg-transparent text-white"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  )
}

export default function Contact() {
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)

    if (result.success) {
      toast.success(result.message)
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    } else {
      toast.error(result.message)
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-primary" />
                <span>usmansinghi786@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-primary" />
                <span>+92-3326077773</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4 text-primary" />
                <span>Multan, Pakistan</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-700 text-white border-gray-600"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-700 text-white border-gray-600"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-gray-700 text-white border-gray-600"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-gray-700 text-white border-gray-600"
                rows={4}
              />
              <SubmitButton />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

