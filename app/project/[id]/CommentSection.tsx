"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
}

// Sample data - replace with your actual data fetching logic
const SAMPLE_COMMENTS: Comment[] = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Proyek ini sangat menjanjikan! Saya tertarik untuk berinvestasi.",
    date: "2 jam yang lalu",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Bagaimana dengan rencana pengembangan ke depannya?",
    date: "5 jam yang lalu",
  },
];

interface CommentSectionProps {
  projectId: number;
}

export default function CommentSection({ projectId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(SAMPLE_COMMENTS);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      user: {
        name: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: newComment,
      date: "Baru saja",
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Tulis komentar Anda..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Kirim Komentar</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
              <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{comment.user.name}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1 text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
