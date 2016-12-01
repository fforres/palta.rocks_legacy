document.addEventListener('DOMContentLoaded', function() {
  var md = new MobileDetect(window.navigator.userAgent);
  var menuIcon = document.getElementById('menuIcon');
  var screenShot = document.getElementById('screenShot');
  var body = document.getElementsByTagName('body')[0];
  var canvas = document.getElementById('canvas');

  menuIcon.addEventListener("click", function (e) {
    body.classList.toggle('sidebar-active');
    menuIcon.classList.toggle("change");
  }, false);


  screenShot.addEventListener("click", function (e) {
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
    var el = document.createElement('a');
    el.href=dataURL;
    el.download = 'screenshot.jpg';
    el.click();
  }, false);

});
