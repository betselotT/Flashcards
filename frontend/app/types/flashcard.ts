export interface Flashcard {
  _id: string;
  word: string;
  answer: string;
  category: "General" | "Vocabulary" | "Phrases" | "Advanced";
  difficulty: "Easy" | "Medium" | "Hard";
  userId: string;
  addedDay: Date;
  lastReviewed?: Date;
  isMemorized: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewFlashcard {
  word: string;
  answer: string;
  category: "General" | "Vocabulary" | "Phrases" | "Advanced";
  difficulty: "Easy" | "Medium" | "Hard";
}
