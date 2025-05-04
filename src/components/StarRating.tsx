
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

const StarRating = ({ rating, max = 5, size = 18, className = "" }: StarRatingProps) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: max }).map((_, i) => {
        // Calculate fill percentage for this star
        const fill = Math.max(0, Math.min(1, rating - i));
        
        return (
          <div key={i} className="relative">
            {/* Empty star (background) */}
            <Star 
              size={size} 
              className="text-gray-300"
            />
            
            {/* Filled star (foreground with clip) */}
            <div 
              className="absolute top-0 left-0 overflow-hidden" 
              style={{ width: `${fill * 100}%` }}
            >
              <Star 
                size={size} 
                className="text-booksy-gold"
              />
            </div>
          </div>
        );
      })}
      <span className="ml-1.5 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
