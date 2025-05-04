
import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import StarRating from "./StarRating";

interface ReviewType {
  id: string;
  title: string;
  content: string;
  rating: number;
  created_at: string;
  profiles: {
    username: string;
    avatar_url: string | null;
  };
}

interface BookReviewsProps {
  bookId: string;
  refreshTrigger: number;
}

const BookReviews = ({ bookId, refreshTrigger }: BookReviewsProps) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("reviews")
          .select(`
            id,
            title,
            content,
            rating,
            created_at,
            profiles:user_id (
              username,
              avatar_url
            )
          `)
          .eq("book_id", bookId)
          .order("created_at", { ascending: false });

        if (error) throw error;
        setReviews(data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [bookId, refreshTrigger]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse">Loading reviews...</div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No reviews yet. Be the first to review this book!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start gap-4">
            {review.profiles.avatar_url ? (
              <img
                src={review.profiles.avatar_url}
                alt={review.profiles.username}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={20} className="text-gray-500" />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <h3 className="font-medium text-booksy-navy">{review.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={review.rating} size={16} />
                    <span className="text-xs text-gray-500">
                      by {review.profiles.username} • {new Date(review.created_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">{review.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookReviews;
