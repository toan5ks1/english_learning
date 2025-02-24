export const Footer = () => {
  return (
    <footer className="bg-background pt-12 sm:px-[22rem] px-0 pb-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4">NAVIGATION</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Whitepaper
            </a>
            <a href="#" className="hover:text-white">
              FAQs
            </a>
            <a href="#" className="hover:text-white">
              About us
            </a>
            <a href="#" className="hover:text-white">
              Marketplace
            </a>
            <a href="#" className="hover:text-white">
              News
            </a>
            <a href="#" className="hover:text-white">
              Our teams
            </a>
            <a href="#" className="hover:text-white">
              Roadmap
            </a>
            <a href="#" className="hover:text-white">
              Community
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>📞 01234568910</p>
            <p>💬 tymex-talent@tyme.com</p>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-700 rounded bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white font-bold shadow-lg hover:from-pink-600 hover:to-purple-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex justify-between items-center mt-6 text-sm text-gray-400">
        <p>©2023 Tyme - Edit. All Rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">
            Security
          </a>
          <a href="#" className="hover:text-white">
            Legal
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};
