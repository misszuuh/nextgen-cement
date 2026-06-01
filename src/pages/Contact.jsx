import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

import axios from 'axios';

const Contact = () => {

  const sendEmailAPI = "http://localhost:3000/contact/sendEmail";

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const contactInfo = [
    { icon: <MapPin className="w-5 h-5 text-deep-green" />, label: 'Head Office', value: 'CBD Area, Sokoine Drive, Dar es Salaam, Tanzania' },
    { icon: <MapPin className="w-5 h-5 text-deep-green" />, label: 'Project Site', value: 'Galu Industrial Area, Mpwapwa District, Dodoma Region' },
    { icon: <Phone className="w-5 h-5 text-deep-green" />, label: 'Phone', value: '+255 735 283 711' },
    { icon: <Mail className="w-5 h-5 text-deep-green" />, label: 'Email', value: 'ceo@gypsumplusmines.co.tz' },
    { icon: <Clock className="w-5 h-5 text-deep-green" />, label: 'Office Hours', value: 'Mon – Fri: 8:00 AM – 5:00 PM EAT' },
  ];

  const inquiryTypes = ['Investment Inquiry', 'Partnership Proposal', 'Technical Question', 'Media & Press', 'General Inquiry'];

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(sendEmailAPI, form);

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message. Try again later.");
  }
};

  return (
    <>
      <section className="bg-gradient-to-br from-dark-blue to-deep-green text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Whether you're an investor, partner, or simply want to learn more about NextGen Cement,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Get in Touch" centered={false} />
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{info.label}</p>
                      <p className="text-gray-700 mt-1">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Interactive Map — Dar es Salaam & Dodoma</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-blue mb-3">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition bg-white"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition resize-none"
                    />
                  </div>

                  <Button variant="primary" type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
