if (typeof modalPath  === 'undefined' ) {
    var modalPath = chrome.runtime.getURL('modal.html') || '';
}

fetch(modalPath).then(response => response.text()).then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
    document.getElementById('ext-btn-modal').addEventListener('click', function() {
        const url = document.getElementById('ext-input-modal').value;
        if (url) {
            open_sys_id_new_tab(url)
        }
        document.getElementById('myModal').remove()
      });
    document.addEventListener('keydown', function(event) {
        // Check if the Escape key was pressed
        if ((event.key === "Escape" || event.keyCode === 27) && document.getElementById('myModal')){
            // Find the modal element by its ID
            var modalElement = document.getElementById('myModal');
            
            // If the element exists, remove it from the DOM
            if (modalElement) {
                modalElement.remove();
            }
        }
    });
    
    }).catch(err => console.error(err));

