import { Track } from '@/app/_hooks/useSpotifyAPI';
import clsx from 'clsx';
import Image from 'next/image';

export default function TrackListEntry({
  track,
  selected,
  setSelected,
}: {
  track: Track;
  selected: boolean;
  setSelected: (track: Track) => void;
}) {
  return (
    <tr
      className={clsx(
        'transition-all border-2 border-white cursor-pointer',
        selected ? 'bg-white' : 'hover:bg-brand-gray'
      )}
      onClick={() => setSelected(track)}
    >
      <td className="p-0 border-e-2 border-white w-24">
        <Image
          src={track.cover.url}
          width={96}
          height={96}
          alt={'Album cover for ' + track.name}
        />
      </td>
      <td className="ps-6">
        <h4 className={clsx('font-bold text-xl', selected && 'text-black')}>
          {track.name}
        </h4>
        <h6 className="text-sm text-neutral-400">
          {track.artists}&nbsp;
          <span
            className={clsx(
              'text-xs ms-1 py-0.5 px-1 rounded',
              selected ? 'bg-neutral-200' : 'bg-neutral-900 text-neutral-600'
            )}
          >
            {new Date(track.releaseDate).toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </h6>
      </td>
    </tr>
  );
}
