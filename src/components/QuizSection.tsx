import { useCallback, useState } from "react";
import quizRaw from "../data/quizQuestions.json";
import type { QuizQuestion } from "../types/quiz";
import { SectionShell } from "./SectionShell";
import { QuizCard } from "./QuizCard";
import "./QuizSection.css";

/** Dados importados do JSON — editar o ficheiro para adicionar/remover perguntas. */
const quizQuestions = quizRaw as QuizQuestion[];

/**
 * Secção 10: grelha de cards do quiz (14 perguntas definidas no JSON).
 */
export function QuizSection() {
  const [revealAll, setRevealAll] = useState(false);

  const handleRevealAll = useCallback(() => {
    setRevealAll(true);
  }, []);

  const handleBackToQuiz = useCallback(() => {
    setRevealAll(false);
  }, []);

  return (
    <SectionShell id="sec-10" title="Quiz interativo" sectionNumber={10}>
      <p className="quiz-section__intro">
        Cada afirmação é um <strong>Fato</strong> ou <strong>Fake</strong>. Abra o card, escolha e
        leia a explicação. Pode também revelar todas as respostas de uma vez.
      </p>

      <div className="quiz-section__toolbar">
        <button
          type="button"
          className="quiz-section__skip-btn"
          onClick={handleRevealAll}
          disabled={revealAll}
        >
          Mostrar todas as respostas corretas
        </button>
        {revealAll && (
          <button type="button" className="quiz-section__reset-btn" onClick={handleBackToQuiz}>
            Voltar ao modo interativo
          </button>
        )}
      </div>

      <div className="quiz-section__grid">
        {quizQuestions.map((item, index) => (
          <QuizCard key={item.id} item={item} index={index} revealAnswers={revealAll} />
        ))}
      </div>
    </SectionShell>
  );
}
