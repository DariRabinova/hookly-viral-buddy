const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Demo", href: "#demo" },
      { label: "Pricing", href: "#pricing" },
      { label: "Features", href: "#features" },
      { label: "API", href: "#api" }
    ]
  },
  {
    title: "Resources", 
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Help Center", href: "#help" },
      { label: "Creator Guide", href: "#guide" },
      { label: "Case Studies", href: "#cases" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
      { label: "Security", href: "#security" },
      { label: "GDPR", href: "#gdpr" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-xl font-bold">Hookly</span>
            </div>
            <p className="text-white/70 mb-4">
              Your AI buddy for viral hooks ✨
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                📱
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                🐦
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                📸
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                💼
              </a>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © 2024 Hookly. All rights reserved. Made with ❤️ for creators.
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-white/70">
            <span>🔒 SSL Secured</span>
            <span>•</span>
            <span>🌍 Global CDN</span>
            <span>•</span>
            <span>⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;