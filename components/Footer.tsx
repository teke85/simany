const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">
              Simany Professional Driving School
            </h3>
            <p className="mt-2">Your first choice driving shool</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Simany Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
