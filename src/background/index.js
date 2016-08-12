/* eslint-disable */
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Include Redux DevTools extension
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/inject.bundle.js');
  httpRequest.send();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      chrome.tabs.executeScript(tabId,
        { code: httpRequest.responseText, runAt: 'document_start' }
      );
    }
  };
});
