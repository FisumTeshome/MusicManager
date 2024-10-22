const Song = require('../models/song');

// Create a song
exports.createSong = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a song
exports.updateSong = async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a song
exports.deleteSong = async (req, res) => {
  const { id } = req.params;
  console.log("Received request to delete song with id:", id); // Log the received id
  try {
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: 'Song deleted successfully' });
  } catch (error) {
    console.error('Error deleting song:', error); // Log any errors that occur
    res.status(500).json({ error: error.message });
  }
};


// Get statistics
exports.getStats = async (req, res) => {
  try {
    const totalSongs = (await Song.countDocuments());
    const totalArtists = (await Song.distinct('artist')).length;
const totalAlbums = (await Song.distinct('album')).length;
const totalGenres = (await Song.distinct('genre')).length;


    const songsPerGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);
    const songsPerArtist = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 } } }
    ]);
    const songsPerAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } }
    ]);
    console.log({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsPerGenre,
      songsPerArtist,
      songsPerAlbum
    });

    res.status(200).json({ totalSongs, totalArtists, totalAlbums, totalGenres, songsPerGenre,songsPerArtist,
      songsPerAlbum });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
