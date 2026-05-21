"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import "./VideoFacade.css";

export default function VideoFacade({
  videoId,
  platform = "youtube", // 'youtube' or 'vimeo'
  title,
  thumbnailUrl,
  className = "",
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-generate thumbnail if not provided
  const getThumbnail = () => {
    if (thumbnailUrl) return thumbnailUrl;
    if (platform === "youtube") {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return "/placeholder-video.jpg"; // fallback
  };

  const getEmbedUrl = () => {
    if (platform === "youtube") {
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    if (platform === "vimeo") {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
    }
    return "";
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePlay();
    }
  };

  if (isPlaying) {
    return (
      <div className={`video-facade is-playing ${className}`}>
        <iframe
          src={getEmbedUrl()}
          title={title || "Video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-facade__iframe"
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className={`video-facade ${className}`}
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${title || ""}`}
    >
      <Image
        src={getThumbnail()}
        alt={title || "Video thumbnail"}
        fill
        className="video-facade__thumbnail"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="video-facade__overlay">
        <button className="video-facade__play-btn" tabIndex={-1} aria-hidden="true">
          <Play fill="currentColor" size={32} />
        </button>
      </div>
    </div>
  );
}
