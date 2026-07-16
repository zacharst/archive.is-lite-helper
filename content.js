// Exit immediately if the hash is missing; indicates manual access by the user
if (window.location.hash === '#auto_redirect=1') {

  // Only run on search, submission or newest routing paths
  // Prevents running unnecessary mutation observers on final static archive articles
  const isSearchOrSubmitPage = 
    window.location.pathname === '/' || 
    window.location.pathname.startsWith('/newest/') || 
    window.location.pathname.startsWith('/http://') || 
    window.location.pathname.startsWith('/https://');

  if (isSearchOrSubmitPage) {

    // Helper function to find the newest archive link and perform the redirect or submission
    const processArchiveDOM = () => {
      
      // Case 1: On the "Webpage Capture" page and need to auto-submit the URL
      const submitForm = document.getElementById('submiturl');
      if (submitForm) {
        const submitBtn = submitForm.querySelector('input[type="submit"]');
        if (submitBtn) {
          submitBtn.click(); 
        } else {
          submitForm.submit(); // Fallback if no submit button is found
        }
        return true;
      }

      // Case 2: Existing archive results, redirect to the newest one
      const newestLink = document.querySelector('#row0 .TEXT-BLOCK a');

      // Redirect if the link is found (no captcha, page fully loaded)
      if (newestLink && newestLink.href) {
        window.location.href = newestLink.href;
        return true; // Successfully redirected
      }

      // Case 3: "No results" found, redirect to the archive creation page
      const archiveLink = document.querySelector('a[href*="?url="]');
      if (archiveLink && archiveLink.href) {
        // Append the hash so extension script is triggered
        const targetUrl = new URL(archiveLink.href, window.location.origin);
        targetUrl.hash = '#auto_redirect=1';
        window.location.href = targetUrl.toString();
        return true;
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
}