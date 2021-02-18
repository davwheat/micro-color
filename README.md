# `micro-color`

A tiny (3.2 kB), limited & tree-shakable alternative to [color](https://github.com/Qix-/color).

It is very limited and optimized for runtime usage in the browser.

It only supports a subset of color and does **not** have input validation.

It has **zero dependencies** and **supports tree-shaking**, making its size even smaller depending on the functions used.

## Installation

```sh
yarn add micro-color
npm i micro-color
```

## Limitations

1. It only supports valid CSS color strings to be passed in
2. It only supports `rgb/a`, `hsl/a` and hex color values
3. It does not optimize output values (e.g. round decimals to X digits)
4. It does not validate input values
5. It always returns `hsla` or `rgba` (even if alpha=1)

## Usage

In order to use any manipulation function, we need to parse our color string.

Now we can manipulate it until we finally generate a string again.

```js
import { parse, toRgb, desaturate, lighten, fade } from 'small-color'

const color = parse('rgb(255, 0, 100)')

const lightened = lighten(color, 0.5)
const saturated = desaturate(lightened, 0.3)
const faded = fade(saturated, 0.5)

const output = toRgb(faded)

console.log(output) // => "rgba(236, 147, 182, 0.5)"
```

## API

### `parse(string): Color`

Parses a CSS color string into a color object that the package can manipulate.

Accepts any "normal" CSS color string:

- `rgb(r, g, b)`
- `rgba(r, g, b, a)`
- `hsl(h, s, l)`
- `hsla(h, s, l, a)`
- `#rrggbb`
- `#rrggbbaa`
- `#rgb`
- `#rgba`

#### Example

```js
parse("hsl(180, 50%, 75%)") // => { h: 0.5, s: 0.5, l: 0.75, a: 1 }
parse("rgb(128, 128, 128, 0.675)") // => { h: 0, s: 0, l: 0.5, a: 0.675 }
parse("#ffffff") // => { h: 0, s: 0, l: 1, a: 1 }
parse("#fff80") // => { h: 0, s: 0, l: 1, a: 0.5 }
```

### `lighten(Color, float): Color`

Lightens a Color object by a given factor. Supplied lighten factor should be provided as a number between 0 and 1, where 0 is no increase and 1 is a 100% increase (double).

- `darken(Color, float): Color`
- `saturate(Color, float): Color`
- `desaturate(Color, float): Color`
- `fade(Color, float): Color`
- `opaquer(Color, float): Color`
- `grayscale(Color): Color`
- `toRgb(Color): string`
- `toHsl(Color): string`

## License

micro-color is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Original project created with ♥ by [@robinweser](http://weser.io) and all the great contributors.
