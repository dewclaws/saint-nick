export interface Track {
  name: string;
  artists: string;
  releaseDate: string;
  url: string;
  cover: {
    url: string;
    width: string;
    height: string;
  };
}

export const useSpotifyAPI = () => {
  return { getTrackInfo };
};

async function getTrackInfo(ids: string[]): Promise<Track[]> {
  const endpoint = `https://api.spotify.com/v1/tracks`;
  const payload = { market: 'CA', ids: [...ids] };
  const response = await spotifyRequest(endpoint, payload);
  const tracks = response.tracks.map((track: any) => ({
    name: track.name,
    artists: track.artists.map((artist: any) => artist.name).join(', '),
    releaseDate: track.album.release_date,
    url: track.external_urls.spotify,
    cover: {
      url: track.album.images[0].url,
      width: track.album.images[0].width,
      height: track.album.images[0].height,
    },
  }));

  return tracks;
}

const spotifyRequest = async (endpoint: string, payload: {}) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const authOptions = {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
    next: { revalidate: 3600 },
  };

  const authRequest = await fetch(
    'https://accounts.spotify.com/api/token',
    authOptions
  );
  if (!authRequest.ok) {
    throw Error('Could not authenticate with Spotify');
  }

  const authResponse = await authRequest.json();
  const accessToken = authResponse.access_token;
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  };

  const params = new URLSearchParams({ ...payload });
  const apiRequest = await fetch(`${endpoint}?${params}`, requestOptions);
  if (!apiRequest.ok) {
    throw Error('API request failed');
  }

  return apiRequest.json();
};
