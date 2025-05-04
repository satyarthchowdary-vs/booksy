
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  genres: string[];
  description: string;
  publicationDate: string;
  featured?: boolean;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  content: string;
  date: string;
}

export const genres = [
  "Fiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Non-Fiction",
  "Biography",
  "History",
  "Self-Help",
  "Horror",
  "Poetry",
  "Young Adult",
  "Children's",
  "Graphic Novel",
  "Memoir",
  "Crime",
  "Adventure",
  "Philosophy",
  "Business"
];

export const books: Book[] = [
  {
    id: "1",
    title: "The Silent Observer",
    author: "Elizabeth Mitchell",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    genres: ["Fiction", "Mystery", "Thriller"],
    description: "In the quiet town of Millfield, a series of inexplicable events begin to unfold when a new resident moves in. Emily Parker, a former detective with a troubled past, notices patterns that others don't. As she begins to investigate, she realizes that the town harbors dark secrets that some would kill to protect.",
    publicationDate: "2023-03-15",
    featured: true,
    reviews: [
      {
        id: "r1",
        userName: "Michael Johnson",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        rating: 5,
        content: "A masterpiece of suspense! Mitchell weaves an intricate web of mystery that kept me guessing until the very end. The character development is exceptional, particularly Emily's journey from skepticism to conviction.",
        date: "2023-04-10"
      },
      {
        id: "r2",
        userName: "Sarah Williams",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        rating: 4,
        content: "Thoroughly enjoyed this thriller. The pacing is perfect, and the small-town setting adds an eerie atmosphere that enhances the mystery. My only critique is that some of the secondary characters could have been explored more deeply.",
        date: "2023-05-22"
      }
    ]
  },
  {
    id: "2",
    title: "Echoes of Eternity",
    author: "Richard Hammond",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    genres: ["Fantasy", "Fiction", "Adventure"],
    description: "In a world where time is fluid and memories can be transferred between people, Lila discovers she possesses a rare ability to see echoes of the past. As she learns to navigate her gift, she becomes entangled in a centuries-old conflict that could determine the fate of reality itself.",
    publicationDate: "2022-11-08",
    featured: true,
    reviews: [
      {
        id: "r3",
        userName: "David Chen",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
        rating: 5,
        content: "Hammond has crafted a breathtaking fantasy world with rules that are both complex and coherent. The concept of memory transfer is explored in ways I've never seen before. Absolutely captivating from start to finish!",
        date: "2023-01-15"
      }
    ]
  },
  {
    id: "3",
    title: "Beyond the Horizon",
    author: "Sophia Rodriguez",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    genres: ["Science Fiction", "Adventure", "Romance"],
    description: "When humanity's first interstellar mission goes awry, the crew of the Nebula finds themselves stranded on a planet that defies all scientific understanding. As they struggle to survive and find a way home, they discover that the planet might not be as uninhabited as they initially thought.",
    publicationDate: "2023-01-20",
    reviews: [
      {
        id: "r4",
        userName: "James Wilson",
        rating: 4,
        content: "A fresh take on the 'stranded on an alien planet' premise. Rodriguez combines hard science with imaginative speculation in a way that feels plausible yet wonderfully strange.",
        date: "2023-02-14"
      }
    ]
  },
  {
    id: "4",
    title: "The Last Diplomat",
    author: "Martin Xavier",
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    genres: ["Thriller", "Political Fiction", "Mystery"],
    description: "In a near-future world on the brink of global war, Ambassador Thomas Reed is tasked with an impossible diplomatic mission that could save humanity. As he navigates the treacherous waters of international politics, he uncovers a conspiracy that reaches the highest levels of government.",
    publicationDate: "2022-09-30"
  },
  {
    id: "5",
    title: "Whispers in the Darkness",
    author: "Catherine Black",
    coverImage: "https://images.unsplash.com/photo-1610882648335-eda2e9a5f80c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    genres: ["Horror", "Supernatural", "Fiction"],
    description: "Following the death of her grandmother, Maya inherits an old mansion with a mysterious past. As she begins renovating the house, she starts experiencing strange phenomena. The local townspeople warn her about the house's dark history, but Maya is determined to uncover the truth behind the whispers in the darkness.",
    publicationDate: "2023-02-14"
  },
  {
    id: "6",
    title: "The Art of Mindful Living",
    author: "Dr. Jonathan Peters",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    genres: ["Self-Help", "Non-Fiction", "Philosophy"],
    description: "In this comprehensive guide, Dr. Peters combines traditional mindfulness practices with modern psychological research to provide practical strategies for living a more conscious and fulfilled life. The book offers step-by-step exercises and real-life examples to help readers integrate mindfulness into their daily routines.",
    publicationDate: "2022-08-01",
    featured: true
  },
  {
    id: "7",
    title: "The Lost City of Zorath",
    author: "Alexandra Quinn",
    coverImage: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    genres: ["Adventure", "Fiction", "Fantasy", "History"],
    description: "Archaeologist Emma Sullivan has spent her career searching for the mythical city of Zorath. When she discovers an ancient map that seems to point the way, she assembles a team of experts to venture into the uncharted jungles. What they find challenges everything they thought they knew about ancient history.",
    publicationDate: "2023-04-05"
  },
  {
    id: "8",
    title: "Summer at Bluebell Cottage",
    author: "Hannah Williams",
    coverImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    genres: ["Romance", "Fiction", "Drama"],
    description: "After a devastating breakup, Lucy escapes to the countryside to spend the summer at her aunt's cottage. She's looking for peace and quiet, but instead finds herself drawn to the charming local bookstore owner. As they bond over their love of literature, Lucy must decide if she's ready to open her heart again.",
    publicationDate: "2022-06-15"
  },
  {
    id: "9",
    title: "Quantum Paradox",
    author: "Daniel Reynolds",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    genres: ["Science Fiction", "Thriller", "Mystery"],
    description: "Physicist Dr. Olivia Chen develops a revolutionary quantum computer that can simulate entire universes. When the simulations start to mirror real-world events with frightening accuracy, she begins to question the nature of reality itself. As governments and corporations vie for control of her invention, Olivia must navigate a dangerous web of deception and betrayal.",
    publicationDate: "2023-05-12"
  },
  {
    id: "10",
    title: "The Last Sonata",
    author: "Isabella Moretti",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    genres: ["Historical Fiction", "Romance", "Drama"],
    description: "In 1940s Vienna, pianist Charlotte Weber struggles to survive as the city falls under Nazi occupation. When she discovers a mysterious sonata hidden in her late grandmother's attic, she embarks on a journey to uncover its origins. The music leads her to an unexpected connection with her family's past and a forbidden love that transcends time.",
    publicationDate: "2022-10-18"
  },
  {
    id: "11",
    title: "The Mindful Entrepreneur",
    author: "Marcus Chen",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    genres: ["Business", "Self-Help", "Non-Fiction"],
    description: "Successful tech entrepreneur Marcus Chen shares practical strategies for building a business while maintaining mental wellbeing. Combining Eastern philosophy with modern business practices, this guide offers a refreshing approach to entrepreneurship that prioritizes balance, purpose, and sustainable growth over burnout and hustle culture.",
    publicationDate: "2023-01-05"
  },
  {
    id: "12",
    title: "The Forgotten Garden",
    author: "Eleanor Hughes",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    genres: ["Mystery", "Historical Fiction", "Romance"],
    description: "When Sarah inherits her great-aunt's countryside estate, she discovers a hidden garden that hasn't been tended for decades. As she works to restore it, she uncovers clues about her family's enigmatic past. The garden holds secrets spanning generations, and Sarah's quest to understand its history leads her to uncover a long-buried scandal and an unexpected romance.",
    publicationDate: "2022-07-22"
  }
];

export const getFeaturedBooks = (): Book[] => {
  return books.filter(book => book.featured);
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByGenre = (genre: string): Book[] => {
  return books.filter(book => book.genres.includes(genre));
};

export const getLatestBooks = (limit: number = 4): Book[] => {
  return [...books]
    .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
    .slice(0, limit);
};
