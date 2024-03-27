

const modalPath = chrome.runtime.getURL('modal.html');
fetch(modalPath).then(response => response.text()).then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
    document.getElementById('ext-btn-modal').addEventListener('click', function() {
        const url = document.getElementById('ext-input-modal').value;
        if (url) {
            const regex = /_(?!.*_)(.*)/;
            const sys_url_path = url.replace(regex, '.do?sys_id=$1');
            window.open(`${document.location.origin}/${sys_url_path}`,'_blank');
        }
        document.getElementById('myModal').remove()
      });
}).catch(err => console.error(err));

