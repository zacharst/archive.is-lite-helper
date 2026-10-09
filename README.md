# Archive.is Lite Helper

A lightweight browser extension that automates searching, saving, and navigating **archive.is** (and its regional mirrors).

---

## What it does

- **1-Click Search**: Click the extension icon to search the current page. The results open in a new tab right next to your active one.
- **No Configuration**: There are no menus, settings, or domain filters (like whitelists/blacklists) to configure—which can be a pro or a con depending on your preference. It simply runs on demand when clicked.
- **Auto-Forward**: If backups already exist, the extension automatically forwards you directly to the newest archived article.
- **Auto-Submit**: If a page has never been archived before, it automatically fills out the "Save" form and starts the archiving process.
- **Smart URL Cleaning**: Strips tracking parameters (like `utm_*`, `fbclid`, or `gclid`) before searching to improve the chance of finding existing archives.
- **Mirror Support**: Supports all common regional mirrors (such as `.is`, `.today`, `.ph`, `.li`, etc.).

---

## How to Install

Since this is a personal project, you can install it manually in any Chromium-based browser (Chrome, Edge, Brave, Vivaldi, etc.):

1. **Download**: Click the green **Code** button at the top-right of this GitHub page and choose **Download ZIP**.
2. **Extract**: Unzip the downloaded file to a folder on your computer.
3. **Open Extensions**: Go to your browser's extensions manager (e.g., `chrome://extensions/` or `edge://extensions/`).
4. **Developer Mode**: Turn on the **Developer mode** toggle switch (usually in the top-right corner).
5. **Load Folder**: Click **Load unpacked** (top-left) and select the extracted folder (the one containing the `manifest.json` file).

*Tip: Pin the extension to your toolbar for quick access.*