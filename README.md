# jsxgettext-loader
Passthrough loader for collecting gettext keys from source

Collects calls like `gettext('Customers')` and `i18n.gettext('Customers')` from source files and generates a `.pot` file of them.

Uses https://github.com/zaach/jsxgettext to do that.

## Usage

Install: `npm install jsxgettext-loader`

Configure: Add `jsxgettext-loader` to loader pipeline after all other transforms (babel, coffee etc):

```js
{
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'jsxgettext-loader?' + JSON.stringify({outputDir: './locale/templates/LC_MESSAGES', output: 'messages.pot'}),
        'babel?' + JSON.stringify({presets: ['react', 'es2015']})
       ]
    }]
  }
}
```

## Configuration

All configuration from loader query is passed directly to `jsxgettext.generate()`.

Accepts (at least) the following parameters:

 * `outputDir` - in which dir to write the `.pot` file
 * `output` - the filename to use
 * `keyword` - an array of keywords to search for. Defaults to `['gettext']`

## License

The MIT license

## Author

Niklas Närhinen <niklas@narhinen.net>
