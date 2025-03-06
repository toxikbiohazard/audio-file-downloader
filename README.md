# Audio File Downloader (Userscript Integration)

This document explains how to use the Audio File Downloader server with the [SampleFocus Downloader](https://greasyfork.org/fr/scripts/524853-samplefocus-downloader) userscript.

This server acts as a backend to facilitate direct audio file downloads within the userscript's workflow.

## Features

-   Provides a download endpoint for the userscript.
-   Handles audio file fetching and delivery.
-   Simplifies direct downloads from SampleFocus.

## Prerequisites

-   Node.js and npm installed on your machine.
-   The [SampleFocus Downloader](https://greasyfork.org/fr/scripts/524853-samplefocus-downloader) userscript installed in your browser (Tampermonkey, Greasemonkey, etc.).

## Installation (Server Setup)

1.  Clone the repository:
    ```bash
    git clone [https://github.com/toxikbiohazard/audio-file-downloader.git](https://github.com/toxikbiohazard/audio-file-downloader.git)
    cd audio-file-downloader
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Start the server:
    ```bash
    node server.js
    ```
    This will run the server on `http://localhost:3000`.

## Userscript Configuration

The SampleFocus Downloader userscript needs to be configured to use your local server.

1.  **Locate the Server URL:** The userscript is designed to send requests to a specific URL. By default, it will expect the server to be running on `http://localhost:3000`. If you change the port in your `server.js` file, you will need to change the userscript to match.

2.  **Ensure Correct Userscript Installation:** Verify that the SampleFocus Downloader script is correctly installed and enabled in your browser's userscript manager.

3.  **No direct userscript modification is generally needed.** The userscript is written to communicate with the server as is. If you changed the endpoint within `server.js` from `/download`, then you would need to change the url within the userscript.

## Usage (Workflow)

1.  **Start the Server:** Ensure the Audio File Downloader server is running (`node server.js`).
2.  **Navigate to SampleFocus:** Open the SampleFocus website in your browser.
3.  **Use the Userscript:** The SampleFocus Downloader userscript will add download buttons to the audio samples on the page.
4.  **Click Download:** Click the download button provided by the userscript.
5.  **Server Interaction:** The userscript will send a request to your local server (`http://localhost:3000/download?url=...`) with the audio file URL.
6.  **Download Initiation:** The server will fetch the audio file and send it back to your browser as a downloadable file.

## Important Notes

-   **Local Server Requirement:** This setup requires the server to be running on your local machine.
-   **Firewall/Security:** Ensure your firewall or security software does not block the server from receiving requests or sending responses.
-   **URL Parameter:** The userscript automatically provides the audio file URL as the `url` query parameter to the server.
-   **Troubleshooting:** If you encounter issues, check the browser's developer console for errors and ensure the server is running without errors.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
