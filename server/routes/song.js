const express = require('express');
const { createSong, getSongs, updateSong, deleteSong, getStats } = require('../controllers/songController');
const router = express.Router();

// CRUD Routes
router.post('/create', createSong);
router.get('/songs', getSongs);
router.put('/update/:id', updateSong);
router.delete('/delete/:id', deleteSong);

// Statistics Route
router.get('/songs/stats', getStats);

module.exports = router;
