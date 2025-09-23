import React from 'react';
import { Mail, Globe, Github, MapPin, Award, Rocket, Bot, Package, Settings } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200">
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Gursimran Singh</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-body">gursimran@singhops.net</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="font-body">singhops.net</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span className="font-body">github.com/gursimran531</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-body">India</span>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Profile</h2>
            <p className="font-body text-gray-700 leading-relaxed">
              Cloud & DevOps Engineer with hands-on experience in AWS, CI/CD automation, Infrastructure as Code, and containerization. 
              Skilled at building scalable cloud solutions, improving operational efficiency, and leading cross-functional teams. 
              Recognized with awards for academic excellence and innovative projects.
            </p>
          </div>

          {/* Core Tech Stack */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Core Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">☁️</span>
                  <div>
                    <span className="font-display font-semibold text-gray-900">AWS:</span>
                    <span className="font-body text-gray-700 ml-2">EC2, S3, Lambda, CloudFormation, CloudWatch, IAM, Route 53</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚙️</span>
                  <div>
                    <span className="font-display font-semibold text-gray-900">DevOps:</span>
                    <span className="font-body text-gray-700 ml-2">CI/CD, GitHub Actions, Docker, Terraform, Prometheus</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💻</span>
                  <div>
                    <span className="font-display font-semibold text-gray-900">Programming:</span>
                    <span className="font-body text-gray-700 ml-2">Python, Bash, JavaScript, React</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🔐</span>
                  <div>
                    <span className="font-display font-semibold text-gray-900">Security:</span>
                    <span className="font-body text-gray-700 ml-2">IAM least privilege, VPCs, Policies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects & Experience */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500">Projects & Experience</h2>
            <div className="space-y-6">
              
              {/* Project 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-blue-600" />
                  <h3 className="font-display text-xl font-bold text-gray-900">CI/CD Pipeline with AWS & CloudFormation</h3>
                </div>
                <ul className="space-y-1 font-body text-gray-700">
                  <li>• Built CI/CD pipeline using GitHub Actions, Docker, AWS services</li>
                  <li>• Automated deployments with CloudFormation, integrated CloudWatch</li>
                  <li>• <span className="font-display font-semibold">Result:</span> Improved accuracy, reduced manual effort, saved team time</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5 text-green-600" />
                  <h3 className="font-display text-xl font-bold text-gray-900">AI-powered Mental Health Assistant</h3>
                </div>
                <ul className="space-y-1 font-body text-gray-700">
                  <li>• Built chatbot with AWS Lex, Comprehend, Polly, Lambda, and S3</li>
                  <li>• Delivered sentiment analysis + text-to-speech with real-time chat</li>
                  <li>• Published GitHub documentation for others to follow</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-purple-600" />
                  <h3 className="font-display text-xl font-bold text-gray-900">Infrastructure Automation with Terraform</h3>
                </div>
                <ul className="space-y-1 font-body text-gray-700">
                  <li>• Deployed multi-tier AWS infrastructure (VPC, EC2, S3)</li>
                  <li>• Implemented IaC best practices for version-controlled infra</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-orange-600" />
                  <h3 className="font-display text-xl font-bold text-gray-900">Raspberry Pi Network Ad-Blocker</h3>
                </div>
                <ul className="space-y-1 font-body text-gray-700">
                  <li>• Created plug-and-play Pi device to block ads across Wi-Fi networks</li>
                  <li>• Configured DNS filtering to improve speed and security</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership & Impact */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Leadership & Impact</h2>
            <ul className="space-y-2 font-body text-gray-700">
              <li>• Led 30-member team: training, mentoring, delegating</li>
              <li>• Automated reporting tasks → freed time for priority work</li>
              <li>• Valued for collaboration and problem-solving</li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="font-body text-gray-700">
                  <span className="font-display font-semibold">Presidential Award (twice)</span> at Seneca College for academic excellence & projects
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-6 h-6 text-gray-600" />
                <span className="font-body text-gray-700">
                  Open-source projects on GitHub: <span className="font-display font-semibold">github.com/gursimran531</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;