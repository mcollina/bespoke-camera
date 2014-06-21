# bespoke-camera

See you during your bespoke presentation!

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/mcollina/bespoke-camera/master/dist/bespoke-camera.min.js
[max]: https://raw.github.com/mcollina/bespoke-camera/master/dist/bespoke-camera.js

## Usage

First, include both `bespoke.js` and `bespoke-camera.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.from('article', {
  camera: true
});
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
</article>
```

Plus, click on the video to put it full-screen!

## Package managers

### Bower

```bash
$ bower install bespoke-camera
```

### npm

```bash
$ npm install bespoke-camera
```

The bespoke-camera npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-camera');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
