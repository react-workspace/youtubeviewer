const express = require('express');
const { google } = require('googleapis');

require('dotenv').config();
const YOUTUBE_API_KEY = process.env.API_KEY

const youtube = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY,
});

const router = express.Router();

router.get('/videos/:videoId/related', (req, res, next) => {
  const { videoId: relatedToVideoId } = req.params;
  const { pageToken } = req.query;
  (async () => {
    // 関連動画のIDを取得
    const { data: { items: idItems, nextPageToken } } = await youtube.search.list({
      part: 'id',
      relatedToVideoId,
      type: 'video',
      maxResults: 20,
      pageToken,
    });
    // 動画の情報を取得
    const ids = idItems.map(({ id: { videoId } }) => videoId);
    const { data: { items } } = await youtube.videos.list({
      part: 'statistics,snippet',
      id: ids.join(','),
    });
    res.json({ items, nextPageToken });
  })().catch(next);
});

module.exports = router;
