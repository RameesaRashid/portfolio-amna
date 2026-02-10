import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace these strings with your actual EmailJS IDs
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus("success");
          form.current.reset(); // Clears the form
          setTimeout(() => setStatus("idle"), 5000);
      }, (error) => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="bg-slate-950 py-22 px-6 relative border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-[#088395] font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
          Get in Touch
        </h2>
        <h3 className="text-white text-2xl md:text-4xl font-black italic tracking-tighter mb-8">
          Let's work <span className="text-zinc-500 not-italic">together.</span>
        </h3>
        
        <p className="text-zinc-400 text-[16px] mb-16 max-w-xl mx-auto leading-relaxed">
          Currently available for freelance branding and development. 
          I usually respond within 24 hours.
        </p>

        {/* Form with Ref for EmailJS */}
        <form ref={form} onSubmit={sendEmail} className="space-y-12 text-left">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-[#3ba18e] transition-colors">Name</label>
              <input 
                name="user_name" // Match these names to your EmailJS Template {{user_name}}
                type="text" 
                required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-[#3ba18e] transition-all px-0"
                placeholder="Full Name"
              />
            </div>

            <div className="relative group">
              <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-[#3ba18e] transition-colors">Email</label>
              <input 
                name="user_email" // Match to {{user_email}}
                type="email" 
                required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-[#3ba18e] transition-all px-0"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-[#3ba18e] transition-colors">Project Brief</label>
            <textarea 
              name="message" // Match to {{message}}
              rows="3"
              required
              className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-[#3ba18e] transition-all px-0 resize-none"
              placeholder="What are you looking to create?"
            />
          </div>

          <div className="flex flex-col items-center pt-8">
            <button 
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`group relative px-6 py-3 font-bold rounded-full overflow-hidden transition-all duration-500 ${
                status === "success" 
                ? "bg-[#3ba18e] text-white" 
                : "bg-white text-slate-950 hover:bg-[#3ba18e] hover:text-white"
              }`}
            >
              <span className="relative z-10 uppercase tracking-widest text-[10px]">
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Error - Try Again"}
              </span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;