export interface QuizQuestion {
  questionNumber: number;
  totalQuestions: number;
  code: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  gifPath?: string;
}
