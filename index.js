document.addEventListener('DOMContentLoaded', function() {
  var v = document.getElementById('video');
  var image = document.getElementById('avocado');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var cw = Math.floor(canvas.clientWidth);
  var ch = Math.floor(canvas.clientHeight);
  canvas.width = cw;
  canvas.height = ch;

  canvas.addEventListener('mousemove', function(e) {
    var mousePosition = getMousePosition(canvas, e);
    var size = Math.floor(Math.random() * 30) + 20;
    context.drawImage(image, mousePosition.x, mousePosition.y, size, size);
  })
  function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
});
