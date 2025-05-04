
import { Link } from "react-router-dom";
import { Book } from "../data/books";
import StarRating from "./StarRating";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook = ({ book }: FeaturedBookProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-booksy-navy to-booksy-navy/90 text-white rounded-lg">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 py-8 px-6 md:py-12 md:px-10">
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-lg transform rotate-6 shadow-lg"></div>
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="relative book-cover w-56 md:w-64 h-auto rounded-md shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="mr-2 text-booksy-gold" />
                <span className="text-sm uppercase tracking-wider text-booksy-gold">Featured Book</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">{book.title}</h2>
              <p className="text-lg text-gray-200 mb-3">by {book.author}</p>
              
              <StarRating rating={book.rating} className="mb-5" size={20} />
              
              <p className="text-gray-200 mb-6 line-clamp-3">
                {book.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {book.genres.map((genre) => (
                  <Link
                    key={genre}
                    to={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
                    className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-booksy-burgundy hover:bg-booksy-burgundy/90">
                  <Link to={`/book/${book.id}`}>
                    Read Review
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
