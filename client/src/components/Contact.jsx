import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    // Get EmailJS environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS variables exist
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");

      setError(
        "Email service is not configured properly. Please try again later."
      );

      setLoading(false);
      return;
    }

    // Debug information
    console.log("EmailJS Service ID:", serviceId);
    console.log("EmailJS Template ID:", templateId);
    console.log("EmailJS Public Key:", publicKey);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        publicKey
      );

      console.log("EmailJS Success:", response);

      // Show success message
      setSubmitted(true);

      // Clear form
      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS FULL ERROR:", error);
      console.error("EmailJS Status:", error?.status);
      console.error("EmailJS Text:", error?.text);

      setError(
        `Message send nahi hua. ${
          error?.text || "Please try again later."
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="eyebrow">Contact</span>

          <h2 className="section-heading">
            Let's build something together
          </h2>

          <p className="section-sub mx-auto">
            Open to internships, full-time roles, and collaborative projects.
            Reach out and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass-card p-7 space-y-5"
          >

            {/* Email */}
            <a
              href="mailto:lavanyabanga14@gmail.com"
              className="flex items-center gap-3 text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
            >
              <span className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-[#b5481f]">
                <HiOutlineMail className="text-lg" />
              </span>

              <span className="break-all">
                lavanyabanga14@gmail.com
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/LavanyaBanga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
            >
              <span className="w-10 h-10 rounded-lg bg-violet-400/10 flex items-center justify-center text-[#b5481f]">
                <FiGithub className="text-lg" />
              </span>

              <span className="break-all">
                github.com/LavanyaBanga
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lavanya-banga-0a00692b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
            >
              <span className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-[#b5481f]">
                <FiLinkedin className="text-lg" />
              </span>

              <span className="break-all">
                linkedin.com/in/lavanya-banga-0a00692b1
              </span>
            </a>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-7 space-y-4"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wide text-[#8a8270] mb-1.5"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg bg-white border border-[#ddd6c8] px-4 py-2.5 text-sm text-[#1c1a17] placeholder:text-[#8a8270] focus:border-cyan-400/50 outline-none transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wide text-[#8a8270] mb-1.5"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full rounded-lg bg-white border border-[#ddd6c8] px-4 py-2.5 text-sm text-[#1c1a17] placeholder:text-[#8a8270] focus:border-cyan-400/50 outline-none transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wide text-[#8a8270] mb-1.5"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-lg bg-white border border-[#ddd6c8] px-4 py-2.5 text-sm text-[#1c1a17] placeholder:text-[#8a8270] focus:border-cyan-400/50 outline-none transition-colors duration-200 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            {/* Success Message */}
            {submitted && (
              <p className="text-sm text-green-600">
                Message sent successfully! ✓
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-full bg-gradient-accent px-6 py-3 font-semibold text-navy-950 transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Sending..."
                : submitted
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}