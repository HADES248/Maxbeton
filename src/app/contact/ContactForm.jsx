'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import showCustomAlert from '@/components/Alert';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '', subject: 'General Inquiry',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, message } = formData;
  if (!name.trim() || !email.trim() || !message.trim()) {
    showCustomAlert("Missing details. Please fill out the form correctly.", "danger");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch('/api/send_email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      showCustomAlert("Failed to send Email, please try again", "danger");
      return;
    }

    showCustomAlert("Email Sent Successfully! We'll get back to you soon.", "success");

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      subject: 'General Inquiry',
    });
  } catch (error) {
    showCustomAlert("Failed to Send Email", "danger");
  } finally {
    setIsSubmitting(false);
  }
};

  const address = 'C-159, Naraina Industrial Area Phase I, New Delhi - 110028, India';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const phone = '+91-96504 41666';
  const email = 'info@maxbeton.in';

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-6">
            {'Contact Us'} <span className="bg-gradient-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">
              MaxBeton</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600">
            Ready to discuss your project or need a quote? Reach out to our team for any <b>General Inquiry, Quote Request, Product Information, Support Request, Partnership with Us</b>, or Other concerns — we are here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {['name', 'email', 'phone', 'company'].map((field) => (
                  <div key={field}>
                    <Label className="text-gray-700" htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}{field === 'name' || field === 'email' ? ' *' : ''}</Label>
                    <Input id={field} name={field} value={formData[field]} onChange={handleChange} required={field === 'name' || field === 'email'} className="border-gray-300" />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <Label className="text-gray-700" htmlFor="subject">Subject</Label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full h-10 rounded-md border px-4 text-sm border-gray-300">
                  {['General Inquiry', 'Quote Request', 'Product Information', 'Support Request', 'Partnership', 'Other'].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <Label className="text-gray-700" htmlFor="message">Your Message *</Label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border rounded-md text-sm border-gray-300" />
              </div>

              <Button type="submit" className="w-full text-white cursor-pointer" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              {[{ icon: MapPin, title: 'Address', value: address, href: googleMapsUrl },
              { icon: Phone, title: 'Phone', value: phone, href: `tel:${phone}` },
              { icon: Mail, title: 'Email', value: email },
              { icon: Clock, title: 'Business Hours', value: 'Mon-Sat: 10:00 AM - 7:00 PM\nSunday: Closed' }].map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start space-x-4 mb-2">
                  <Icon className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">{value}</a> : <p>{value}</p>}
                  </div>
                </div>
              ))}
            </div>
            {/* Consider making FAQ content dynamic or translatable */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-lg font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { question: "Do you offer equipment financing?", answer: "Yes, we partner with several financial institutions to offer flexible financing options. Please contact our sales team for details." },
                  { question: "What is the warranty on your equipment?", answer: "Our new equipment comes with a standard manufacturer's warranty. Specific terms vary by product. Used equipment warranty options are also available." },
                  { question: "Do you provide operator training?", answer: "Yes, we offer comprehensive operator training programs for most of the equipment we sell to ensure safe and efficient operation." }
                ].map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-md mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=15`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MaxBeton Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
