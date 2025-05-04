
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavbarUserSection from "./NavbarUserSection";

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Fiction", href: "/genre/fiction" },
    { label: "Non-Fiction", href: "/genre/non-fiction" },
    { label: "Sci-Fi", href: "/genre/science-fiction" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-booksy-navy">
              Booksy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-600 hover:text-booksy-burgundy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
            </Button>

            <NavbarUserSection />

            {/* Mobile Menu */}
            <div className="md:hidden ml-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          to={link.href}
                          className="block px-2 py-1 text-lg hover:text-booksy-burgundy transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
