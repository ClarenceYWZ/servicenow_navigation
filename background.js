chrome.commands.onCommand.addListener(function (command) {
  if (command.match(/^update-sys-id-nav*/)) {
    chrome.tabs.query({active: true, currentWindow: true, url: "*://*.service-now.com/*"}, (tabs) => {
      if (tabs.length === 0) {
        return
      } 
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['modal.js']
        // function: openModal
      });
    });
  }
})
function openModal() {
  chrome.runtime.sendMessage({action: "openModal"});
  const modalPath = chrome.runtime.getURL('modal.html');
  fetch(modalPath).then(response => response.text()).then(data => {
  document.body.insertAdjacentHTML('beforeend', data);
  }).catch(err => console.error(err));
}
