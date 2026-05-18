import { useMemo } from "react";
import { SectionShell } from "./SectionShell";
import "./VideoSection.css";

type VideoSectionProps = {
  id: string;
  youtubeId: string;
  startSeconds: number;
  title: string;
};

/**
 * Secção com vídeo YouTube embutido (início opcional em segundos).
 */
export function VideoSection({ id, youtubeId, startSeconds, title }: VideoSectionProps) {
  const embedSrc = useMemo(() => {
    const params = new URLSearchParams({ start: String(startSeconds) });
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params}`;
  }, [youtubeId, startSeconds]);

  return (
    <SectionShell id={id} title={title} showHeader={false}>
      <div className="video-section__viewport">
        <iframe
          className="video-section__iframe"
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </SectionShell>
  );
}
