'use client';

import { Track } from '@/hooks/useSpotifyAPI';
import Image from 'next/image';
import { useState } from 'react';
import TrackListEntry from './TrackListEntry';

export default function TrackList({ tracks }: { tracks: Track[] }) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="flex justify-between">
      <div className="w-full lg:me-6">
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
        <div className="hidden lg:flex border-2 border-white">
          <div className="flex flex-col">
            <Image
              src={selectedTrack.cover.url}
              className="object-cover h-full border-b-2 border-white"
              width={400}
              height={400}
              alt={'Album cover for ' + selectedTrack.name}
            />
            <div className="flex flex-col px-4 py-2">
              <h2 className="text-3xl font-bold">{selectedTrack.name}</h2>
              <h4 className="text-md text-neutral-400">
                {selectedTrack.artists}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
