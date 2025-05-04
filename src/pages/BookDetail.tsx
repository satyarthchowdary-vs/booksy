
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import BookCard from "@/components/BookCard";
import { getBookById, getBooksByGenre } from "@/data/books";
import { Calendar, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewForm from "@/components/ReviewForm";
import BookReviews from "@/components/BookReviews";
import { useAuth } from "@/contexts/AuthContext";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || "");
  const { user } = useAuth();
  const [refreshReviews, setRefreshReviews] = useState(0);
  
  // If book not found, show not found message
  useEffect(() => {
    if (!book) {
      console.error(`Book with id ${id} not found`);
    }
  }, [book, id]);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Book Not Found</h1>
            <p className="mb-6 text-gray-600">The book you're looking for doesn't exist.</p>
            <Link to="/" className="text-booksy-burgundy hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related books based on first genre
  const relatedBooks = book.genres.length > 0 
    ? getBooksByGenre(book.genres[0]).filter(b => b.id !== book.id).slice(0, 4) 
    : [];
  
  // Parse publication date
  const formattedDate = new Date(book.publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Handle review added
  const handleReviewAdded = () => {
    setRefreshReviews(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Book Header */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Book Cover */}
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="book-cover w-48 md:w-full max-w-xs rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Book Details */}
              <div className="md:w-3/4">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-booksy-navy">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-700 mb-4">by {book.author}</p>
                
                <div className="flex items-center mb-6">
                  <StarRating rating={book.rating} size={24} />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genres.map((genre) => (
                    <Link
                      key={genre}
                      to={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
                      className="px-3 py-1 bg-booksy-light rounded-full text-booksy-navy hover:bg-booksy-gold/20 transition-colors text-sm"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center mb-6 text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>Published: {formattedDate}</span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {book.description}
                </p>
                
                <div className="flex gap-3">
                  <Button className="bg-booksy-burgundy hover:bg-booksy-burgundy/90">
                    Add to Reading List
                  </Button>
                  <Button variant="outline">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-medium mb-8 text-booksy-navy">
              Reader Reviews
            </h2>
            
            {!user && (
              <div className="mb-8 bg-booksy-light/50 rounded-lg p-6 text-center">
                <p className="mb-4">Sign in to leave a review for this book.</p>
                <Button asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
              </div>
            )}
            
            {user && (
              <div className="mb-12">
                <ReviewForm bookId={book.id} onReviewAdded={handleReviewAdded} />
              </div>
            )}
            
            <BookReviews bookId={book.id} refreshTrigger={refreshReviews} />
          </div>
        </section>
        
        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="py-12 bg-booksy-light">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-serif font-medium mb-8 text-booksy-navy">
                You May Also Like
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedBooks.map((relatedBook) => (
                  <BookCard key={relatedBook.id} book={relatedBook} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
