import { TrackList } from '@/app/_components';
import { useSpotifyAPI } from '@/app/_hooks/useSpotifyAPI';

export default async function Discography() {
  const { getTrackInfo } = useSpotifyAPI();
  const tracks = await getTrackInfo([
    '6bTbMMEShyGyrcuIwtBlpA',
    '0O8z1t1M41aeVAUi7scRvb',
    '2aJrOHXueCAs8xK6tZTJvJ',
  ]);

  return (
    <section className="h-screen">
      <h1 className="mb-8 text-6xl font-black">Discography</h1>
      <TrackList tracks={tracks} />
    </section>
  );
}
