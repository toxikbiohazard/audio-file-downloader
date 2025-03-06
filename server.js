const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/download', async (req, res) => {
  const audioUrl = req.query.url; // Get the URL from query parameters

  if (!audioUrl) {
    return res.status(400).send('URL parameter is missing.');
  }

  try {
    const response = await fetch(audioUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const contentType = response.headers.get('content-type');
    const buffer = await response.buffer();

    res.setHeader('Content-Disposition', 'attachment; filename="downloaded_file"');
    res.setHeader('Content-Type', contentType);
    res.send(buffer);
  } catch (error) {
    console.error('Error downloading the file:', error);
    res.status(500).send('Could not download the file.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
