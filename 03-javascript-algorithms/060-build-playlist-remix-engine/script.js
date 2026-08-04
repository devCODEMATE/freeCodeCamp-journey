const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const flattened = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      const track = {
        ...playlists[i][j],
        source: [i, j]
      };

      flattened.push(track);
    }
  }

  return flattened;
}

function scoreTracks(tracks) {
  const scored = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = {
      ...tracks[i],
      score: tracks[i].votes * 10 - Math.abs(tracks[i].bpm - 120)
    };

    scored.push(track);
  }

  return scored;
}

function dedupeTracks(tracks) {
  const result = [];
  const seen = [];

  for (let i = 0; i < tracks.length; i++) {
    if (!seen.includes(tracks[i].trackId)) {
      seen.push(tracks[i].trackId);
      result.push(tracks[i]);
    }
  }

  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const result = [];
  const artistCounts = {};

  for (let i = 0; i < tracks.length; i++) {
    const artist = tracks[i].artist;

    if (!artistCounts[artist]) {
      artistCounts[artist] = 0;
    }

    if (artistCounts[artist] < maxPerArtist) {
      result.push(tracks[i]);
      artistCounts[artist]++;
    }
  }

  return result;
}

function buildSchedule(tracks) {
  const schedule = [];

  for (let i = 0; i < tracks.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return schedule;
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const limited = enforceArtistQuota(deduped, maxPerArtist);
  const schedule = buildSchedule(limited);

  return schedule;
}
