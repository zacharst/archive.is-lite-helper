chrome.action.onClicked.addListener((tab) => {
  // Check for valid URL (e.g., not a chrome:// or file:// URL)
  if (tab.url && (tab.url.startsWith('http://') || tab.url.startsWith('https://'))) {
    
    // Build archive.is URL
    const archiveUrl = `https://archive.is/${encodeURIComponent(tab.url)}`;
    
    chrome.tabs.create({
      url: archiveUrl,
      index: tab.index + 1
    });
  }
});