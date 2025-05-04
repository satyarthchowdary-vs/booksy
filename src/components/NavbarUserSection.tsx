
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const NavbarUserSection = () => {
  const { user, profile, signOut } = useAuth();

  if (!user) {
    return (
      <Button asChild variant="outline" className="ml-4">
        <Link to="/auth">Sign In</Link>
      </Button>
    );
  }

  const initials = profile?.username
    ? profile.username.substring(0, 2).toUpperCase()
    : user.email?.substring(0, 2).toUpperCase() || "??";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={profile?.avatar_url || ""} alt={profile?.username || "User"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{profile?.username || user.email}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserSection;
