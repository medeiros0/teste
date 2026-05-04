import { useCallback, useId, useState } from "react";
import type { QuizQuestion } from "../types/quiz";
import "./QuizCard.css";

type QuizCardProps = {
  item: QuizQuestion;
  index: number;
  /** Quando true (botão na secção 10): mostra pergunta, resposta certa e explicação sem responder. */
  revealAnswers: boolean;
};

/**
 * Card de pergunta: clique expande; após escolher opção mostra acerto/erro e explicação.
 * Uma tentativa por card (estado bloqueado após resposta), salvo modo revelação global.
 */
export function QuizCard({ item, index, revealAnswers }: QuizCardProps) {
  const baseId = useId();
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  const handleToggle = useCallback(() => {
    setExpanded((e) => !e);
  }, []);

  const handleChoose = useCallback(
    (optionId: string) => {
      if (locked || revealAnswers) return;
      setSelectedId(optionId);
      setLocked(true);
    },
    [locked, revealAnswers],
  );

  const chosen = item.options.find((o) => o.id === selectedId);
  const isCorrect = chosen?.correct === true;
  const correctOption = item.options.find((o) => o.correct);

  const showPanel = expanded || revealAnswers;
  const showNormalFeedback = !revealAnswers && locked && selectedId;

  return (
    <article
      className={`quiz-card ${showPanel ? "quiz-card--open" : ""}${revealAnswers ? " quiz-card--reveal-all" : ""}`}
    >
      <button
        type="button"
        className="quiz-card__header"
        onClick={handleToggle}
        aria-expanded={showPanel}
        aria-controls={`${baseId}-panel`}
        id={`${baseId}-header`}
      >
        <span className="quiz-card__num">{index + 1}</span>
        <span className="quiz-card__preview">
          {showPanel ? "Fechar" : "Abrir pergunta"}
        </span>
        <span className="quiz-card__chevron" aria-hidden>
          {showPanel ? "▲" : "▼"}
        </span>
      </button>

      <div
        id={`${baseId}-panel`}
        role="region"
        aria-labelledby={`${baseId}-header`}
        className="quiz-card__panel"
        hidden={!showPanel}
      >
        <p className="quiz-card__question">{item.question}</p>

        <ul className="quiz-card__options" role="list">
          {item.options.map((opt) => {
            const isChosen = selectedId === opt.id;
            const showResult = !revealAnswers && locked && isChosen;
            const showCorrectReveal = revealAnswers && opt.correct;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  className={`quiz-card__option${
                    showCorrectReveal ? " quiz-card__option--correct" : ""
                  }${
                    showResult
                      ? opt.correct
                        ? " quiz-card__option--correct"
                        : " quiz-card__option--wrong"
                      : ""
                  }${
                    (revealAnswers && !opt.correct) ||
                    (locked && !revealAnswers && !isChosen)
                      ? " quiz-card__option--disabled"
                      : ""
                  }`}
                  onClick={() => handleChoose(opt.id)}
                  disabled={locked || revealAnswers}
                  aria-pressed={isChosen}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>

        {revealAnswers && correctOption && (
          <div className="quiz-card__feedback quiz-card__feedback--reveal" role="status">
            <strong>Resposta correta: {correctOption.label}</strong>
            <p className="quiz-card__explanation">{item.explanation}</p>
          </div>
        )}

        {showNormalFeedback && (
          <div
            className={`quiz-card__feedback ${isCorrect ? "quiz-card__feedback--ok" : "quiz-card__feedback--bad"}`}
            role="status"
          >
            <strong>{isCorrect ? "Acertou!" : "Errou."}</strong>
            <p className="quiz-card__explanation">{item.explanation}</p>
          </div>
        )}
      </div>
    </article>
  );
}
