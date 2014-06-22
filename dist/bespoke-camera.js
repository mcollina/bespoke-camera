/*!
 * bespoke-camera v0.1.0
 * https://github.com/mcollina/bespoke-camera
 *
 * Copyright 2014, Matteo Collina
 * This content is released under the MIT license
 */

bespoke.plugins.camera = function(deck, options) {

  var video = document.createElement("video");
  var fullscreen = false;

  options = options || {};
  options.width = options.width || "640px";

  video.style.width = options.width;
  video.style.position = "fixed";
  video.style.top = "0px";
  video.style.right = "0px";
  video.style.visibility = "hidden";
  video.style.opacity = "0";

  video.onclick = function() {
    toggleFullScreen();
  }

  document.querySelector('body').appendChild(video);

  activateVideo()

  deck.on('activate', function(e) {
    if (e.slide.getAttribute('data-camera') === 'fullscreen') {
      show()
      requestFullscreen()
    } if (e.slide.getAttribute('data-camera') !== null) {
      show()
    } else {
      hide()
      setTimeout(exitFullscreen, 500);
    }
  });

  // expose the video
  deck.video = {
    el: video,
    show: show,
    hide: hide,
    requestFullscreen: requestFullscreen,
    exitFullscreen: exitFullscreen,
    toggleFullScreen: toggleFullScreen
  }

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
      video.controls = false;

      // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
      // See crbug.com/110938.
      video.onloadedmetadata = function(e) {
        // Ready to go. Do some stuff.
      };
    }, errorCallback);
  }

  function requestFullscreen() {
    if (fullscreen) {
      return;
    }

    fullscreen = true;
    video.style.width = "100%";
  }

  function exitFullscreen() {
    if (!fullscreen) {
      return;
    }

    fullscreen = false;
    video.style.width = options.width;
  }

  function toggleFullScreen() {
    if (!fullscreen) {
      requestFullscreen()
    } else {
      exitFullscreen()
    }
  }

  function show() {
    // transition to visible
    video.style.opacity = "1";
    video.style.transition = "opacity 0.5s linear";
    video.style.visibility = "visible";
  }

  function hide() {
    // transition to hidden
    video.style.opacity = "0";
    video.style.transition = "visibility 0s 0.25s, opacity 0.25s linear";
    video.style.visibility = "hidden";
  }
};
