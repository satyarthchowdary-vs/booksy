
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedBook from "@/components/FeaturedBook";
import BookCard from "@/components/BookCard";
import { Book, getFeaturedBooks, getLatestBooks, genres } from "@/data/books";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const featuredBooks = getFeaturedBooks();
  const latestBooks = getLatestBooks(8);
  const [visibleGenres, setVisibleGenres] = useState(10);

  const showMoreGenres = () => {
    setVisibleGenres(genres.length);
  };

  const showLessGenres = () => {
    setVisibleGenres(10);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Featured Book */}
        {featuredBooks.length > 0 && (
          <section className="py-6">
            <div className="container mx-auto px-4">
              <FeaturedBook book={featuredBooks[0]} />
            </div>
          </section>
        )}

        {/* Latest Reviews Section */}
        <section className="py-12 bg-booksy-light">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-booksy-navy">Latest Reviews</h2>
              <Link to="/latest" className="text-sm text-booksy-burgundy hover:underline">
                View all
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {latestBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Genre Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-booksy-navy mb-8">Browse by Genre</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {genres.slice(0, visibleGenres).map((genre) => (
                <Link 
                  key={genre}
                  to={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group"
                >
                  <BookOpen className="h-8 w-8 text-booksy-burgundy mb-3 group-hover:text-booksy-gold transition-colors" />
                  <span className="text-booksy-navy font-medium group-hover:text-booksy-burgundy transition-colors">{genre}</span>
                </Link>
              ))}
            </div>
            
            {genres.length > 10 && (
              <div className="mt-6 text-center">
                {visibleGenres < genres.length ? (
                  <button 
                    onClick={showMoreGenres}
                    className="text-booksy-burgundy hover:underline"
                  >
                    Show More Genres
                  </button>
                ) : (
                  <button 
                    onClick={showLessGenres}
                    className="text-booksy-burgundy hover:underline"
                  >
                    Show Less Genres
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Join Community Section */}
        <section className="py-16 bg-booksy-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Join Our Community of Book Lovers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Connect with fellow readers, share your thoughts, and discover your next favorite book.
              Sign up now to start your reading journey with us.
            </p>
            <Link to="/auth" className="px-6 py-3 bg-booksy-burgundy hover:bg-booksy-burgundy/90 text-white rounded-md transition-colors inline-block">
              Sign Up Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
