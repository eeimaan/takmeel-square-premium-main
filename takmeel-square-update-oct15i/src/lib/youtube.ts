// src/lib/youtube.ts
/**
 * Helpers for YouTube video links used in the Testimonials and Construction sections.
 * Accepts watch?v=, youtu.be/, /embed/, /shorts/ URLs or a bare 11-char video id.
 *
 * >>> TEMP_VIDEO is a temporary placeholder link. Replace the `video` fields in
 *     src/data/testimonials.ts and src/data/updates.ts with the final YouTube URLs. <<<
 */
export const TEMP_VIDEO = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";

export function youTubeId(url: string): string {
  if (!url) return "";
  const patterns = [
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /\/embed\/([a-zA-Z0-9_-]{11})/,
    /\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return m[1];
  }
  return /^[a-zA-Z0-9_-]{11}$/.test(url) ? url : "";
}

/** High-quality thumbnail for a video URL, empty string if the id can't be parsed. */
export const youTubeThumb = (url: string): string => {
  const id = youTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

/** Autoplaying embed URL for the modal player. */
export const youTubeEmbed = (url: string): string => {
  const id = youTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : url;
};
