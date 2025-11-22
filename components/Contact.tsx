import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA.personal_information;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto parameters
    const subject = `Portfolio Inquiry: ${formData.subject || 'New Contact'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Use encodeURIComponent for safe URL formatting
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a temporary link and click it - this is more reliable than window.location.href in some browsers
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();

    // Optional: Notify user
    // alert("Opening your email client to send the message.");
  };

  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
             <div>
                <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Get In Touch</h4>
                <h2 className="text-4xl font-display font-bold text-white">Let's create something <br/> amazing.</h2>
             </div>
             <p className="text-gray-400">
               I am currently available for freelance work or full-time opportunities. If you have a project that needs some creative injection, that’s how I solve problems.
             </p>

             <div className="space-y-6 pt-4">
               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-primary transition-colors shrink-0">
                    <MapPin className="text-white group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Location</h5>
                    <p className="text-gray-400 text-sm">{contact.location}</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-primary transition-colors shrink-0">
                    <Phone className="text-white group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Phone</h5>
                    <p className="text-gray-400 text-sm">{contact.phone}</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-primary transition-colors shrink-0">
                    <Mail className="text-white group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Email</h5>
                    <p className="text-gray-400 text-sm">{contact.email}</p>
                  </div>
               </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-gray-800">
             <form className="space-y-6" onSubmit={handleSend}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Your Name</label>
                   <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" 
                    required
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Your Email</label>
                   <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" 
                    required
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Subject</label>
                   <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" 
                    required
                   />
               </div>

               <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                   <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                   ></textarea>
               </div>

               <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(19,155,253,0.4)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 cursor-pointer">
                 Send Message <Send size={18} />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;