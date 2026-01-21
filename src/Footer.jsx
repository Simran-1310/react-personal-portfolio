const Footer = () => {
    return (
      <footer className="bg-slate-900 text-gray-300 mt-10">
        <div className=" mx-auto px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-20">
  
          {/* Column 1 - About */}
          <div className="ml-20">
            <h2 className="text-lg font-semibold text-white mb-3">
              Simran Sharma
            </h2>
            <p className="text-sm text-gray-400">
              Passionate frontend developer building modern and responsive
              web applications using React and Tailwind CSS.
            </p>
          </div>
  
          <div className="ml-25">
            <h2 className="text-lg font-semibold text-white mb-3">
              Contact
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Email: sharmasimran102005@gmail.com</li>
              <li>Location: Mohali</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom bar */}
        <div className="border-t border-gray-700 text-center py-4 text-sm">
          © {new Date().getFullYear()} Simran Sharma.All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  