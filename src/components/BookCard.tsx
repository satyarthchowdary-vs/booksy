
import { Link } from "react-router-dom";
import { Book } from "../data/books";
import StarRating from "./StarRating";

interface BookCardProps {
  book: Book;
  className?: string;
}

const BookCard = ({ book, className = "" }: BookCardProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Link to={`/book/${book.id}`} className="group">
        <div className="relative aspect-[2/3] overflow-hidden rounded-md mb-3">
          <img
            src={book.coverImage}
            alt={`${book.title} cover`}
            className="book-cover object-cover w-full h-full bg-gray-100"
          />
        </div>
        <h3 className="font-serif font-medium text-lg leading-tight mb-1 group-hover:text-booksy-burgundy transition-colors">
          {book.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-600 mb-1.5">{book.author}</p>
      <div className="mt-auto">
        <StarRating rating={book.rating} size={16} />
        <div className="mt-2 flex flex-wrap gap-1">
          {book.genres.slice(0, 2).map((genre) => (
            <Link
              key={genre}
              to={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
              className="text-xs px-2 py-1 bg-booksy-light rounded-full text-booksy-navy hover:bg-booksy-gold/20 transition-colors"
            >
              {genre}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
