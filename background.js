chrome.action.onClicked.addListener((tab) => {
  if (tab.url && (tab.url.startsWith('http://') || tab.url.startsWith('https://'))) {
    
    // Remove tracking parameters
    const cleanUrl = sanitizeUrl(tab.url);
    
    // Build the direct /newest/ URL to let the server handle the redirect instantly
    // Append a hash (#auto_redirect=1) to the archive.is URL to indicate that the redirect should be automatic
    const archiveUrl = `https://archive.is/newest/${encodeURIComponent(cleanUrl)}#auto_redirect=1`;
    
    chrome.tabs.create({
      url: archiveUrl,
      index: tab.index + 1
    });
  }
});

// Helper function to strip common analytics and tracking parameters
function sanitizeUrl(urlString) {
  try {
    const url = new URL(urlString);
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'fbclid', 'gclid', 'yclid', 'msclkid', 'ref', 'reflink', 'wt_zmc',
      'cx_testId', 'cx_testVariant', 'cx_artPos'
    ];
    trackingParams.forEach(param => url.searchParams.delete(param));
    return url.toString();
  } catch (e) {
    return urlString; // Fallback
  }
}