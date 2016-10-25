document.addEventListener('DOMContentLoaded', function() {
  var md = new MobileDetect(window.navigator.userAgent);
  var v = document.getElementById('video');
  var image = document.getElementById('avocado');
  var canvas = document.getElementById('canvas');
  var mobileNotif = document.getElementById('mobile');
  var context = canvas.getContext('2d');

  var cw = Math.floor(canvas.clientWidth);
  var ch = Math.floor(canvas.clientHeight);
  canvas.width = cw;
  canvas.height = ch;

  var drawing = false;
  canvas.addEventListener("mousedown", function(e) {
    drawing = true;
  });

  canvas.addEventListener("mouseup", function(e) {
    drawing = false;
  });


  canvas.addEventListener("touchstart", function (e) {
    play();
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchend", function (e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);


  canvas.addEventListener('mousemove', tryToDraw)
  function tryToDraw(e) {
    if (drawing) {
      var mousePosition = getMousePosition(canvas, e);
      var size = Math.floor(Math.random() * 30) + 20;
      context.drawImage(image, mousePosition.x, mousePosition.y, size, size);
    }
  }
  function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function play() {
    v.play();
  }

  if (md.is('iPhone')) {
    mobileNotif.style.display = "flex"
  }
});
