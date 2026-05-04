/**
 * Tipos do quiz: cada pergunta tem opções e uma explicação pós-resposta.
 * O JSON em `data/quizQuestions.json` deve respeitar este formato.
 */
export type QuizOption = {
  id: string;
  label: string;
  correct: boolean;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
};
