function open_sys_id_new_tab(url) {
  const regex = /_(?!.*_)(.*)/;
  const sys_url_path = url.replace(regex, '.do?sys_id=$1');
  window.open(`${document.location.origin}/${sys_url_path}`,'_blank');
}

document.addEventListener('click', function(event) {
  // Check if Ctrl and Shift keys were pressed, and the left mouse button was clicked
  console.log(event.target.textContent, event)
  if (event.ctrlKey && event.button === 0 && event.target.tagName === 'TD') {
      // Prevent default action to avoid any unintended behavior
      event.preventDefault();
      // Run the custom function, passing the event as an argument
      open_sys_id_new_tab(event.target.textContent);
  }
});