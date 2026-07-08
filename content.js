// Exit immediately if the hash is missing; indicates manual access by the user
if (window.location.hash === '#auto_redirect=1') {

  // Helper function to find the newest archive link and perform the redirect
  const processArchiveDOM = () => {
    const newestLink = document.querySelector('#row0 .TEXT-BLOCK a');

    // Redirect if the link is found (no captcha, page fully loaded)
    if (newestLink && newestLink.href) {
      window.location.href = newestLink.href;
      return true; // Successfully redirected
    }

    return false; // Failed to redirect (possibly blocked by captcha or page is still loading)
  };

  // Initial check on page load
  if (!processArchiveDOM()) {
    
    // If the page loads asynchronously, monitor the DOM for structural changes
    const observer = new MutationObserver((mutations, obs) => {
      if (processArchiveDOM()) {
        obs.disconnect(); // Disconnect the observer once the redirect has been triggered
      }
    });

    // Start monitoring the document body
    observer.observe(document.body, { childList: true, subtree: true });
  }
}