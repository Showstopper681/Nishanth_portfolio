import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const { personal_information, experience, projects, certifications, education, skills } = PORTFOLIO_DATA;
  const yearsExp = 3; // Calculated from 2022-2025
  const totalSkills = skills.frontend.length + skills.backend.length + skills.databases.length;

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Construct HTML content for the Word document
    const content = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>Resume - ${personal_information.full_name}</title>
        <style>
          body { font-family: 'Calibri', 'Arial', sans-serif; line-height: 1.5; color: #000000; }
          h1 { font-size: 24pt; margin-bottom: 5px; color: #2E74B5; }
          h2 { font-size: 14pt; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #2E74B5; color: #2E74B5; uppercase; }
          h3 { font-size: 12pt; font-weight: bold; margin-bottom: 2px; margin-top: 15px; }
          .job-meta { font-style: italic; color: #444; margin-bottom: 5px; }
          p { margin: 5px 0; }
          ul { margin-top: 5px; padding-left: 20px; }
          li { margin-bottom: 2px; }
          .contact-info { font-size: 11pt; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <!-- Header -->
        <div align="center">
          <h1>${personal_information.full_name}</h1>
          <p class="contact-info">
            ${personal_information.title}<br/>
            ${personal_information.contact.email} | ${personal_information.contact.phone} | ${personal_information.contact.location}
          </p>
        </div>

        <!-- Summary -->
        <h2>Professional Summary</h2>
        <p>${personal_information.bio}</p>

        <!-- Experience -->
        <h2>Work Experience</h2>
        ${experience.map(exp => `
          <h3>${exp.position}</h3>
          <p class="job-meta"><strong>${exp.company}</strong>, ${exp.location} | ${exp.duration}</p>
          <ul>
            ${exp.responsibilities.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `).join('')}

        <!-- Projects -->
        <h2>Key Projects</h2>
        ${projects.map(proj => `
          <h3>${proj.name}</h3>
          <p class="job-meta"><strong>Role:</strong> ${proj.role}</p>
          <p>${proj.description}</p>
          <ul>
            ${proj.responsibilities.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `).join('')}

        <!-- Skills -->
        <h2>Technical Skills</h2>
        <p><strong>Frontend:</strong> ${skills.frontend.join(', ')}</p>
        <p><strong>Backend:</strong> ${skills.backend.join(', ')}</p>
        <p><strong>Databases:</strong> ${skills.databases.join(', ')}</p>

        <!-- Certifications -->
        <h2>Certifications</h2>
        <ul>
          ${certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>

        <!-- Education -->
        <h2>Education</h2>
        ${education.map(edu => `
          <h3>${edu.degree}</h3>
          <p>${edu.institution}</p>
          <p>${edu.duration} | ${edu.score}</p>
        `).join('')}
      </body>
      </html>
    `;

    // Create a Blob with the content
    const blob = new Blob(['\ufeff', content], {
      type: 'application/msword'
    });

    // Create a temporary download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_${personal_information.full_name.replace(/\s+/g, '_')}.doc`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-24 bg-card/50 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Experience Card */}
        <div className="relative">
          <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h1 className="text-[120px] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent opacity-80">
              0{yearsExp}
            </h1>
            <h3 className="text-3xl font-bold text-white mt-[-20px] ml-2">Years <br/> Of Experience</h3>
            <p className="text-gray-400 mt-6 leading-relaxed">
              Delivering robust full-stack solutions, optimizing performance, and collaborating on complex enterprise-grade applications.
            </p>
          </div>
          
          {/* Background Accent Card */}
          <div className="absolute top-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl z-0 hidden lg:block pointer-events-none"></div>
        </div>

        {/* Right: Content */}
        <div>
           <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">About Me</h4>
           <h2 className="text-4xl font-display font-bold text-white mb-6">
             Transforming Complexity <br/> Into <span className="text-white underline decoration-primary decoration-4 underline-offset-4">Clarity</span>
           </h2>
           <p className="text-gray-400 text-lg leading-relaxed mb-8">
             {personal_information.bio}
           </p>
           
           {/* Stats Grid */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/40 p-4 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                 <h4 className="text-3xl font-bold text-white">{projects.length}</h4>
                 <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                 <h4 className="text-3xl font-bold text-white">{certifications.length}</h4>
                 <p className="text-gray-500 text-sm">Certifications</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                 <h4 className="text-3xl font-bold text-white">{totalSkills}</h4>
                 <p className="text-gray-500 text-sm">Technologies Mastered</p>
              </div>
           </div>

           <button 
             onClick={handleDownloadCV}
             className="inline-flex px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all items-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
           >
             Download CV <Download size={18} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default About;