import { Navbar } from "./components/Navbar";
import { ImageSection } from "./components/ImageSection";
import { QuizSection } from "./components/QuizSection";
import { IMAGE_SECTIONS } from "./config/imageSections";

/**
 * Página única: 13 secções com âncoras (#sec-1 … #sec-13).
 * Secções 1–9 e 11–13: imagem; secção 10: quiz com dados em JSON.
 */
function App() {
  const imageByNum = new Map(
    IMAGE_SECTIONS.map((cfg) => [cfg.sectionNumber, cfg]),
  );

  return (
    <>
      <Navbar />
      <main className="page-content">
        {Array.from({ length: 13 }, (_, i) => {
          const n = i + 1;
          if (n === 10) {
            return <QuizSection key="sec-10" />;
          }
          const cfg = imageByNum.get(n);
          if (!cfg) return null;
          return (
            <ImageSection
              key={cfg.sectionNumber}
              sectionNumber={cfg.sectionNumber}
              title={cfg.title}
              alt={cfg.alt}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
