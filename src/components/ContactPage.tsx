import React, { useState } from 'react';

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white font-['Inter',sans-serif] relative z-10 bg-[#1d4ed8]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                Get in touch
              </h1>
              <div className="w-12 h-0.5 bg-white mb-8"></div>
              <p className="text-lg text-blue-100 mb-12">
                For general enquiries
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
                  Address
                </h3>
                <p className="text-white/90">
                  1/A 15th Road, Chembur, Mumbai - 400071
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
                  Phone
                </h3>
                <p className="text-white/90">
                  +91 22 25208522
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <p className="text-white/90">
                  info@supremegroup.co.in
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b border-white/30 pb-3 text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};