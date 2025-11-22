import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  // Data for Recharts
  const chartData = [
    { name: 'Frontend', value: skills.frontend.length, color: '#139BFD' },
    { name: 'Backend', value: skills.backend.length, color: '#13FDFD' },
    { name: 'Database', value: skills.databases.length, color: '#ffffff' },
  ];

  const renderSkillBar = (skill: string, percentage: number) => (
    <div className="mb-6" key={skill}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
          style={{ width: `${percentage}%` }}
        >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h4 className="text-primary font-bold tracking-widest uppercase mb-2">My Capabilities</h4>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
             Crafting Impactful Designs <br/> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">The Right Tools</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Progress Bars */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary pl-4">Frontend & UI</h3>
              {skills.frontend.map((skill, idx) => renderSkillBar(skill, 90 - (idx * 5)))} 
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-secondary pl-4">Backend & Core</h3>
              {skills.backend.map((skill, idx) => renderSkillBar(skill, 85 - (idx * 5)))}
            </div>
          </div>

          {/* Right: Visual Representation (Recharts) */}
          <div className="bg-card rounded-2xl p-8 border border-gray-800 shadow-2xl">
             <h3 className="text-xl font-bold text-white text-center mb-4">Skill Distribution</h3>
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={chartData}
                     cx="50%"
                     cy="50%"
                     innerRadius={60}
                     outerRadius={100}
                     paddingAngle={5}
                     dataKey="value"
                     stroke="none"
                   >
                     {chartData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Pie>
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                   />
                   <Legend />
                 </PieChart>
               </ResponsiveContainer>
             </div>
             <div className="mt-6 grid grid-cols-2 gap-4">
               {skills.databases.map((db) => (
                 <div key={db} className="bg-dark/50 p-3 rounded-lg text-center border border-gray-800">
                   <span className="text-gray-400 text-sm">{db}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
