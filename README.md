# bespoke-camera

See you during your bespoke presentation!

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/mcollina/bespoke-camera/master/dist/bespoke-camera.min.js
[max]: https://raw.github.com/mcollina/bespoke-camera/master/dist/bespoke-camera.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  camera = require('bespoke-camera');

bespoke.from('article', [
  camera()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.camera()
]);
```

Then add a `data-camera` property in each slide you want to display your video, like so:

```html
<article>
  <section data-camera>
    <p>This slide has a camera</p>
  </section>
  <section>
    <p>This slide has not</p>
  </section>
  <section data-camera="fullscreen">
    <p>This slide has a camera in fullscreen</p>
  </section>
</article>
```

Plus, click on the video to put it full-screen!

## Package managers

### npm

```bash
$ npm install bespoke-camera
```

### Bower

```bash
$ bower install bespoke-camera
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
