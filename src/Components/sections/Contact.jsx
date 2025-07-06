import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration or Info */}
          <div className="hidden lg:block text-white space-y-4 px-4">
            <h3 className="text-4xl font-bold text-blue-400">Let's Talk</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations, projects, or just to say hi. I'm always open to connecting!
            </p>
            <ul className="text-gray-300 mt-6 space-y-2">
              <li><strong>Email:</strong> akshaysuresh441@gmail.com</li>
              <li><strong>Phone:</strong> +91-6282378426</li>
              <li><strong>Location:</strong> Kerala, India</li>
            </ul>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />

              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
