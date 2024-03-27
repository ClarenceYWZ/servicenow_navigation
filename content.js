chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse)  => {
    console.log(request.action)
    if (request.action === "openModal") {
      const modalPath = chrome.runtime.getURL('modal.html');
      fetch(modalPath).then(response => response.text()).then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    }).catch(err => console.error(err));
    }
  });
  