
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";
import { genres } from "../data/books";

const Footer = () => {
  return (
    <footer className="bg-booksy-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-7 w-7 text-booksy-gold" />
              <span className="text-xl font-serif tracking-wide text-white">BookReviews</span>
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              Discover your next favorite book through thoughtful reviews
              and recommendations from our community of book lovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-booksy-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-booksy-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-booksy-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-booksy-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/latest" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Latest Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Genres */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-booksy-gold">Popular Genres</h3>
            <ul className="space-y-2">
              {genres.slice(0, 6).map((genre) => (
                <li key={genre}>
                  <Link
                    to={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {genre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-booksy-gold">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get notified about new book reviews and features.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-booksy-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-booksy-burgundy hover:bg-booksy-burgundy/90 text-white rounded-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} BookReviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
