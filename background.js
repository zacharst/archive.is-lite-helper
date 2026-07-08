chrome.action.onClicked.addListener((tab) => {
  if (tab.url && (tab.url.startsWith('http://') || tab.url.startsWith('https://'))) {
    
    // Append a hash (#auto_redirect=1) to the archive.is URL to indicate that the redirect should be automatic
    const archiveUrl = `https://archive.is/${encodeURIComponent(tab.url)}#auto_redirect=1`;
    
    chrome.tabs.create({
      url: archiveUrl,
      index: tab.index + 1
    });
  }
});