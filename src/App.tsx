import { Navbar } from "./components/Navbar";
import { ImageSection } from "./components/ImageSection";
import { QuizSection } from "./components/QuizSection";
import { VideoSection } from "./components/VideoSection";
import { IMAGE_SECTIONS } from "./config/imageSections";
import { PAGE_SECTIONS } from "./config/pageSections";

/**
 * Página única: secções 1–14 (imagem), vídeo após a 5, quiz na 10.
 */
function App() {
  const imageByNum = new Map(
    IMAGE_SECTIONS.map((cfg) => [cfg.sectionNumber, cfg]),
  );

  return (
    <>
      <Navbar />
      <main className="page-content">
        {PAGE_SECTIONS.map((item) => {
          if (item.kind === "quiz") {
            return <QuizSection key="sec-10" />;
          }
          if (item.kind === "video") {
            return (
              <VideoSection
                key={item.id}
                id={item.id}
                youtubeId={item.youtubeId}
                startSeconds={item.startSeconds}
                title={item.title}
              />
            );
          }
          const cfg = imageByNum.get(item.sectionNumber);
          if (!cfg) return null;
          return (
            <ImageSection
              key={`sec-${cfg.sectionNumber}`}
              sectionNumber={cfg.sectionNumber}
              alt={cfg.alt}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
