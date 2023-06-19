'use client';

import { Track } from '@/app/_hooks/useSpotifyAPI';
import { useState } from 'react';
import { Spotify } from 'react-spotify-embed';
import TrackListEntry from './TrackListEntry';

export default function TrackList({ tracks }: { tracks: Track[] }) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="flex justify-between">
      <div className="w-full lg:me-6">
        {selectedTrack && (
          <div className="lg:hidden mb-4">
            <Spotify wide link={selectedTrack.url} />
          </div>
        )}
        <table className="border-collapse w-full">
          <tbody>
            {tracks.map((track) => (
              <TrackListEntry
                key={track.name}
                track={track}
                selected={selectedTrack === track}
                setSelected={setSelectedTrack}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedTrack && (
        <div className="hidden lg:block">
          <Spotify link={selectedTrack.url} />
        </div>
      )}
    </div>
  );
}
