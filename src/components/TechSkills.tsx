import React from 'react';

const TechSkills: React.FC = () => {
  const skillsRow1 = [
    { name: 'Bash Script', icon: '🔧', gradient: 'from-green-500 to-green-600' },
    { name: 'Windows Terminal', icon: '💻', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Markdown', icon: '📝', gradient: 'from-gray-500 to-gray-600' },
    { name: 'PowerShell', icon: '⚡', gradient: 'from-blue-600 to-blue-700' },
    { name: 'Python', icon: '🐍', gradient: 'from-yellow-500 to-green-500' },
    { name: 'AWS', icon: '☁️', gradient: 'from-orange-500 to-orange-600' },
    { name: 'Netlify', icon: '🌐', gradient: 'from-teal-500 to-teal-600' },
  ];

  const skillsRow2 = [
    { name: 'Azure', icon: '☁️', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Google Cloud', icon: '🌤️', gradient: 'from-red-500 to-yellow-500' },
    { name: 'Jenkins', icon: '🔨', gradient: 'from-blue-600 to-blue-700' },
    { name: 'DynamoDB', icon: '🗄️', gradient: 'from-orange-500 to-red-500' },
    { name: 'MySQL', icon: '🐬', gradient: 'from-blue-500 to-blue-600' },
    { name: 'MongoDB', icon: '🍃', gradient: 'from-green-500 to-green-600' },
    { name: 'MariaDB', icon: '🗃️', gradient: 'from-blue-600 to-blue-700' },
  ];

  const skillsRow3 = [
    { name: 'Redis', icon: '🔴', gradient: 'from-red-500 to-red-600' },
    { name: 'GitHub Actions', icon: '⚙️', gradient: 'from-gray-700 to-gray-800' },
    { name: 'GitHub', icon: '🐙', gradient: 'from-gray-600 to-gray-700' },
    { name: 'Docker', icon: '🐳', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Grafana', icon: '📊', gradient: 'from-orange-500 to-red-500' },
    { name: 'Git', icon: '📚', gradient: 'from-orange-600 to-red-600' },
    { name: 'Terraform', icon: '🏗️', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Kubernetes', icon: '⚓', gradient: 'from-blue-600 to-blue-700' },
  ];

  const SkillBanner = ({ skill, index }: { skill: typeof skillsRow1[0]; index: number }) => (
    <div
      key={`${skill.name}-${index}`}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${skill.gradient} text-white font-medium whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-fit`}
    >
      <span className="text-lg">{skill.icon}</span>
      <span className="font-body text-xs font-semibold tracking-wide">{skill.name}</span>
    </div>
  );

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
            🛠️ My Tech Arsenal
          </h3>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of technologies, frameworks, and tools I work with daily to deliver robust cloud and DevOps solutions.
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1: Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 animate-scroll-right-to-left">
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <SkillBanner key={`row1-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 animate-scroll-left-to-right">
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <SkillBanner key={`row2-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Row 3: Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 animate-scroll-right-to-left-slow">
              {[...skillsRow3, ...skillsRow3].map((skill, index) => (
                <SkillBanner key={`row3-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;