import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex justify-between">
        <div>
          <p>&copy; 2025 Balder Opportunities</p>
        </div>
        <div>
          <a
            href="/cookies-policy"
            className="hover:underline"
          >
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
