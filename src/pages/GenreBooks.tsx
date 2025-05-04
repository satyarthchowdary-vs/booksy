import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { getBooksByGenre, genres } from "@/data/books";
import { BookOpen } from "lucide-react";

const GenreBooks = () => {
  const { genre } = useParams<{ genre: string }>();
  const formattedGenre = genre ? genre.replace(/-/g, " ").split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ") : "";
  
  const books = getBooksByGenre(formattedGenre);
  const [isValidGenre, setIsValidGenre] = useState(true);

  useEffect(() => {
    // Check if the genre exists in our list
    setIsValidGenre(genres.includes(formattedGenre));
  }, [formattedGenre]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Genre Header */}
        <section className="bg-booksy-navy text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <BookOpen size={32} className="text-booksy-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{formattedGenre} Books</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Discover the best {formattedGenre.toLowerCase()} books with our curated collection of reviews and recommendations.
            </p>
          </div>
        </section>
        
        {/* Books Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {!isValidGenre ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-600 mb-4">
                  Genre "{formattedGenre}" not found. Please check our available genres.
                </p>
                <Link to="/" className="text-booksy-burgundy hover:underline">
                  Back to Home
                </Link>
              </div>
            ) : books.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-600 mb-4">
                  No books found in the {formattedGenre} genre.
                </p>
                <Link to="/" className="text-booksy-burgundy hover:underline">
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Genres */}
        <section className="py-8 bg-booksy-light">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-serif font-medium mb-6 text-booksy-navy">Browse Other Genres</h2>
            
            <div className="flex flex-wrap gap-3">
              {genres
                .filter(g => g !== formattedGenre)
                .slice(0, 10)
                .map(otherGenre => (
                  <Link 
                    key={otherGenre}
                    to={`/genre/${otherGenre.toLowerCase().replace(" ", "-")}`}
                    className="px-3 py-1 bg-white rounded-full text-booksy-navy hover:bg-booksy-gold/20 transition-colors text-sm"
                  >
                    {otherGenre}
                  </Link>
                ))
              }
              <Link 
                to="/"
                className="px-3 py-1 bg-booksy-burgundy rounded-full text-white hover:bg-booksy-burgundy/90 transition-colors text-sm"
              >
                See All Genres
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GenreBooks;
