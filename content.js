// Get latest archive.is link and redirect
function processArchiveDOM() {

  const newestLink = document.querySelector('#row0 .TEXT-BLOCK a');

  // Might be blocked by a captcha or the page might not be fully loaded yet
  if (newestLink && newestLink.href) {
    window.location.href = newestLink.href;
    return true; // Signals the observer that we were successful
  }

  return false; // Blocked for some reason (captcha, not loaded yet, etc.)
}

// Check on page load
if (!processArchiveDOM()) {
  
  // wait for page changes
  const observer = new MutationObserver((mutations, obs) => {
    if (processArchiveDOM()) {
      // Disconnect observer immediately once the link is found and clicked
      obs.disconnect(); 
    }
  });

  // Start monitoring the document body for structural changes
  observer.observe(document.body, { childList: true, subtree: true });
}
