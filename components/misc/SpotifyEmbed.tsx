import { type HTMLAttributes } from 'react';

interface SpotifyEmbedProps extends HTMLAttributes<HTMLIFrameElement> {
  link: string;
}

export default function SpotifyEmbed({ link, ...props }: SpotifyEmbedProps) {
  const url = new URL(link);

  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}?utm_source=oembed`}
      allow="encrypted-media"
      style={{
        borderRadius: 8,
        ...props.style,
      }}
      {...props}
    />
  );
}
