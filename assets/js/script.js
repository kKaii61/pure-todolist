const dragItems = document.querySelectorAll('.drag-box');

// Make every box have drag function
dragItems.forEach((item) => {
  dragElement(item);
});

/*
 * Function to move box to the cursor position
 */
function dragElement(element) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  element.onmousedown = onMouseDown;

  // Get cursor position
  function onMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    // Delete event when on mouse up

    element.classList.add('dragging');
    document.onmouseup = onMouseUp;

    document.onmousemove = onDragElement;
  }

  function onDragElement(e) {
    e = e || window.event;
    e.preventDefault();

    // Update box position
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    element.style.left = element.offsetLeft - pos1 + 'px';
  }

  function onMouseUp() {
    // Stop moving
    element.classList.remove('dragging');
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
