import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
interface SongState {
  songs: Song[];
  loading: boolean;
  error: boolean;
  stats: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsPerGenre: Record<string, number>;
    songsPerAlbum: Record<string, number>;
    songsPerArtist: Record<string, number>;
  } | null;
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: false,
  stats: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // actions to fetche the song datas
    fetchSongsStart(state) {
      state.loading = true;
      state.error = false;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure(state) {
      state.loading = false;
      state.error = true;
    },
    // actions to fetche the statistics of songs
    fetchStatsStart: (state) => {
      state.loading = true;
    },
    fetchStatsSuccess: (state, action: PayloadAction<any>) => {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsFailure, } = songSlice.actions;
export default songSlice.reducer;
