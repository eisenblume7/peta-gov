"use client";

import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

const CommentSection = ({ projectId }: { projectId: number }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      content: "Proyek ini sangat menjanjikan!",
      date: "2023-05-20",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Saya sudah berinvestasi dan sangat puas dengan progressnya.",
      date: "2023-05-21",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "Anda",
        content: newComment,
        date: new Date().toISOString().split("T")[0],
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <MessageSquare className="w-6 h-6 mr-2" />
        Komentar
      </h2>
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-gray-800">{comment.author}</p>
              <p className="text-sm text-gray-500">{comment.date}</p>
            </div>
            <p className="text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitComment} className="flex items-center">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Tulis komentar Anda..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white p-2 rounded-r-md hover:bg-teal-700 transition-colors duration-300"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
