import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, MapPin, Phone, Send, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { contact, full_name } = PORTFOLIO_DATA.personal_information;
  const form = useRef<HTMLFormElement>(null);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (form.current) {
      emailjs
        .sendForm(
          'service_s3b9p9m', // Service ID
          'template_nku0mmo', // Template ID
          form.current,
          {
            publicKey: 'gMGEaV1D4PNcp7ViA', // Public Key
          }
        )
        .then(
          () => {
            setIsSubmitted(true);
            setIsLoading(false);
            if (form.current) form.current.reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setError('Failed to send message. Please try again later.');
            setIsLoading(false);
          },
        );
    }
  };

  return (
    <section id="contact" className="pt-12 pb-24 bg-dark relative">
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

               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-primary transition-colors shrink-0">
                    <Linkedin className="text-white group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">LinkedIn</h5>
                    <a 
                      href="https://www.linkedin.com/in/nishanthkalaimani/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 text-sm hover:text-primary transition-colors"
                    >
                      nishanthkalaimani
                    </a>
                  </div>
               </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-gray-800">
             <form ref={form} className="space-y-6" onSubmit={sendEmail}>
               {/* Hidden input for to_name (The portfolio owner) */}
               <input type="hidden" name="to_name" value={full_name} />

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Your Name</label>
                   <input 
                    type="text" 
                    name="from_name" // Matches {{from_name}} in template
                    placeholder="Enter your name" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" 
                    required
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Your Email</label>
                   <input 
                    type="email" 
                    name="from_email" // Matches {{from_email}} in template
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
                    placeholder="Project inquiry" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" 
                    required
                   />
               </div>

               <div className="space-y-2">
                   <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                   <textarea 
                    rows={4} 
                    name="message" // Matches {{message}} in template
                    placeholder="Tell me about your project" 
                    className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                   ></textarea>
               </div>
              
               {error && <p className="text-red-500 text-sm">{error}</p>}

               <button 
                type="submit" 
                disabled={isSubmitted || isLoading}
                className={`w-full py-4 font-bold rounded-lg transition-all transform flex justify-center items-center gap-2 cursor-pointer 
                  ${isSubmitted 
                    ? 'bg-green-600 text-white cursor-default' 
                    : isLoading 
                      ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary text-black hover:shadow-[0_0_20px_rgba(19,155,253,0.4)] hover:-translate-y-1'
                  }
                `}
               >
                 {isLoading ? (
                   <>Sending... <Loader2 size={18} className="animate-spin" /></>
                 ) : isSubmitted ? (
                   <>Message Sent! <CheckCircle size={18} /></>
                 ) : (
                   <>Send Message <Send size={18} /></>
                 )}
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;