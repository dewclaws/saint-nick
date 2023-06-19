import { useEffect, useRef, useState } from 'react';

export default function TrackPreview(props: { src: string }) {
  const audioRef = useRef(new Audio(props.src));
  const isPlaying = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <svg width="128" height="128">
      <circle
        strokeWidth={1}
        fill="transparent"
        stroke="white"
        r={58}
        cx={60}
        cy={60}
      ></circle>
    </svg>
  );
}
