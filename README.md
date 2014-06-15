[![Build Status](https://secure.travis-ci.org/mcollina/bespoke-camera.png?branch=master)](https://travis-ci.org/mcollina/bespoke-camera)

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
