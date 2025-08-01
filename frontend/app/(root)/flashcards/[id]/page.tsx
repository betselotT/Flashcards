// app/flashcards/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Use useParams for dynamic route params
import { Flashcard, NewFlashcard } from "@/app/types/flashcard"; // Adjust path as needed

const FlashCards = () => {
  const params = useParams(); // Get params from the URL
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [newFlashcard, setNewFlashcard] = useState<NewFlashcard>({
    word: "",
    answer: "",
    category: "General",
    difficulty: "Easy",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchFlashcards = async () => {
      if (!token) {
        router.push("/sign-in");
        return;
      }
      try {
        const response = await fetch("http://localhost:5000/api/flashcards", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          const userFlashcards = data.filter(
            (card: Flashcard) => card.userId === params.id
          );
          setFlashcards(userFlashcards);
        } else {
          setError("Failed to load flashcards");
        }
      } catch (err) {
        setError("Server error");
      }
    };
    fetchFlashcards();
  }, [token, router, params.id]);

  const handleCreateFlashcard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setError("Please sign in");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...newFlashcard, userId: params.id }),
      });
      if (response.ok) {
        const data = await response.json();
        setFlashcards([...flashcards, data]);
        setNewFlashcard({
          word: "",
          answer: "",
          category: "General",
          difficulty: "Easy",
        });
        setError("");
      } else {
        setError("Failed to create flashcard");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen bg-green-950 p-4 relative">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-16">
        <h1 className="text-2xl font-bold text-green-950 mb-6 text-center">
          Flashcard Page
        </h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleCreateFlashcard} className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Word"
            value={newFlashcard.word}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, word: e.target.value })
            }
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
            required
          />
          <input
            type="text"
            placeholder="Meaning"
            value={newFlashcard.answer}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, answer: e.target.value })
            }
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
            required
          />
          <select
            value={newFlashcard.category}
            onChange={(e) =>
              setNewFlashcard({
                ...newFlashcard,
                category: e.target.value as
                  | "General"
                  | "Vocabulary"
                  | "Phrases"
                  | "Advanced",
              })
            }
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
          >
            <option value="General">General</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Phrases">Phrases</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select
            value={newFlashcard.difficulty}
            onChange={(e) =>
              setNewFlashcard({
                ...newFlashcard,
                difficulty: e.target.value as "Easy" | "Medium" | "Hard",
              })
            }
            className="w-full p-3 border border-green-950 rounded focus:outline-none focus:ring-2 focus:ring-green-950 text-green-950"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-950 text-white p-3 rounded hover:bg-green-900 transition"
          >
            Add Flashcard
          </button>
        </form>
        <div className="space-y-4">
          {flashcards.map((flashcard) => (
            <div
              key={flashcard._id}
              className="p-4 border border-green-950 rounded"
            >
              <p className="text-green-950">
                <strong>Word:</strong> {flashcard.word}
              </p>
              <p className="text-green-950">
                <strong>Meaning:</strong> {flashcard.answer}
              </p>
              <p className="text-green-950">
                <strong>Category:</strong> {flashcard.category}
              </p>
              <p className="text-green-950">
                <strong>Difficulty:</strong> {flashcard.difficulty}
              </p>
              <p className="text-green-950">
                <strong>Added:</strong>{" "}
                {new Date(flashcard.addedDay).toLocaleDateString()}
              </p>
              <p className="text-green-950">
                <strong>Memorized:</strong>{" "}
                {flashcard.isMemorized ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
