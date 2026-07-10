import { useState } from "react";
import "./VideoPlaceholder.css";

const VIDEOS = ["/Manager.mov", "/Farmer.mov", "/Buyer.mov"];
const THUMBNAIL = "/Images/thumbnail.png";

function VideoPlaceholder() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePlay = () => setActiveIndex(0);

  const handleEnded = () => {
    setActiveIndex((prev) => (prev + 1 < VIDEOS.length ? prev + 1 : null));
  };

  if (activeIndex === null) {
    return (
      <button type="button" className="video-placeholder" onClick={handlePlay} aria-label="Play video">
        <img className="video-placeholder__thumbnail" src={THUMBNAIL} alt="" />
        <span className="video-placeholder__icon">▶</span>
      </button>
    );
  }

  return (
    <video
      key={activeIndex}
      className="video-placeholder video-placeholder--player"
      src={VIDEOS[activeIndex]}
      poster={THUMBNAIL}
      autoPlay
      muted
      controls
      onEnded={handleEnded}
    />
  );
}

export default VideoPlaceholder;
