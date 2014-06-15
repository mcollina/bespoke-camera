bespoke.plugins.camera = function(deck, options) {

  var video = document.createElement("video");

  options = options || {};

  video.style.width = options.width || "640px";
  video.style.position = "fixed";
  video.style.top = "0px";
  video.style.right = "0px";
  video.style.visibility = "hidden";
  video.style.opacity = "0";

  document.querySelector('body').appendChild(video);

  activateVideo()

  deck.on('activate', function(e) {
    if (e.slide.getAttribute('data-camera') !== null) {
      // transition to visible
      video.style.opacity = "1";
      video.style.transition = "opacity 0.5s linear";
      video.style.visibility = "visible";
    } else {
      // transition to hidden
      video.style.opacity = "0";
      video.style.transition = "visibility 0s 0.25s, opacity 0.25s linear";
      video.style.visibility = "hidden";
    }
  });

  function activateVideo() {
    var errorCallback = function(e) {
      console.log('Reeeejected!', e);
    };

    navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

    var constraints = {
      video: {
       // HD required, then reducing via CSS
       mandatory: {
          minWidth: 1280,
          minFrameRate: 30.0
        }
      },
      audio: false
    };

    navigator.getUserMedia(constraints, function(localMediaStream) {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();

      // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
      // See crbug.com/110938.
      video.onloadedmetadata = function(e) {
        // Ready to go. Do some stuff.
      };
    }, errorCallback);
  }
};
