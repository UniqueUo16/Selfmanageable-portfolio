import { Montserrat } from "next/font/google";

const montserrat =  Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div className={`${montserrat.className}`}>
          <h2 className= "not-last:text-2xl font-bold text-white">YourName</h2>
          <p className="mt-4 text-sm text-gray-400">
            Helping Business Grow WIth Passion
          </p>
        </div>

        {/* Quick Links */}
        <div className={`${montserrat.className}`}>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`${montserrat.className}`}>
          <h3 className= "text-lg font-semibold text-white mb-4 ">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <u><a href="mailto:uounique251@gmail.com"  className="hover:text-white">uounique251@gmail.com.com </a></u></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+123 456 7890</a></li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={`${montserrat.className}`}>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="hover:text-white">🌐</a>
            <a href="#" target="_blank" className="hover:text-white">🐦</a>
            <a href="#" target="_blank" className="hover:text-white">💼</a>
            <a href="#" target="_blank" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`${montserrat.className} text-center border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 `}>
        © {new Date().getFullYear()} YourName. All Rights Reserved.
      </div>
    </footer>
  );
}
