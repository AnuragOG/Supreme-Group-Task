
export const Footer = (): JSX.Element => {
  const footerLinks = {
    applications: [
      'Apparel',
      'Automotive',
      'Filtration',
      'Customized Solutions'
    ],
    company: [
      'Who We Are',
      'Global Competency',
      'Innovation',
      'ESG Impact'
    ],
    more: [
        'Contact US',
      'Careers'
    ],
    followUs: [
      'LinkedIn',
    ]
  };

  return (
    <div className="bg-white text-gray-800 font-['Inter',sans-serif] relative z-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-44 py-16">
        {/* Logo Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-600">SUPREME</h2>
              <p className="text-sm text-gray-600 uppercase tracking-wider">GROUP</p>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Applications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              APPLICATIONS
            </h3>
            <ul className="space-y-4">
              {footerLinks.applications.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              COMPANY
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              MORE
            </h3>
            <ul className="space-y-4">
              {footerLinks.more.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              FOLLOW US
            </h3>
            <ul className="space-y-4">
              {footerLinks.followUs.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              ©2024. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500">
              Supreme House, 1/A 15th Road Chembur, Mumbai - 400071
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};