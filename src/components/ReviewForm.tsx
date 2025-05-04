
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";

interface ReviewFormProps {
  bookId: string;
  onReviewAdded: () => void;
}

const ReviewForm = ({ bookId, onReviewAdded }: ReviewFormProps) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit a review.",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase.from("reviews").insert({
        book_id: bookId,
        user_id: user.id,
        title,
        content,
        rating,
      });

      if (error) throw error;

      toast({
        title: "Review submitted!",
        description: "Your review has been added successfully.",
      });
      
      // Reset form
      setTitle("");
      setContent("");
      setRating(0);
      
      // Refresh reviews list
      onReviewAdded();
      
    } catch (error: any) {
      toast({
        title: "Error submitting review",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
        <CardDescription>Share your thoughts about this book with others</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`focus:outline-none ${
                    (hover || rating) >= star ? "text-booksy-gold" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <StarIcon size={24} fill={(hover || rating) >= star ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Review Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your review a title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Review Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your thoughts about this book"
              rows={5}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-booksy-burgundy hover:bg-booksy-burgundy/90" 
            disabled={!user || submitting}
          >
            {submitting ? "Submitting..." : user ? "Submit Review" : "Sign in to Review"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ReviewForm;
