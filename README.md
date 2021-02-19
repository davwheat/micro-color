# `micro-color`

|     Type     |                             Info                              |
| :----------: | :-----------------------------------------------------------: |
|   Gzipped    |    ![](https://badgen.net/bundlephobia/minzip/micro-color)    |
|   Minified   |     ![](https://badgen.net/bundlephobia/min/micro-color)      |
| Tree-shaking | ![](https://badgen.net/bundlephobia/tree-shaking/micro-color) |

<sup>[Data from Bundlephobia](https://bundlephobia.com/result?p=micro-color)</sup>

# Info

A tiny, limited and tree-shakable alternative to [`color`](https://github.com/Qix-/color). Based off of Robin Weser's [`small-color`](https://github.com/robinweser/small-color) package.

It is very limited and optimized for runtime usage in the browser.

It only supports a subset of color and does **not** have input validation.

It has **zero dependencies** and **supports tree-shaking**, making its size even smaller depending on the functions used.

## Installation

```sh
yarn add micro-color
npm i micro-color
```

## Limitations

1. Only valid CSS color strings can be used as inputs (rgb, rgba, hsl, hsla, hex)
2. Output values are rounded to 2 or 4 decimal places (depending on the property)
3. Only outputs RGBA or HSLA values (alpha is always provided, even if 1)
4. Inputs are not validated (but adjustments are clamped to the valid values)

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
parse('hsl(180, 50%, 75%)') // => { h: 0.5, s: 0.5, l: 0.75, a: 1 }
parse('rgb(128, 128, 128, 0.675)') // => { h: 0, s: 0, l: 0.5, a: 0.675 }
parse('#ffffff') // => { h: 0, s: 0, l: 1, a: 1 }
parse('#fff80') // => { h: 0, s: 0, l: 1, a: 0.5 }
```

### `lighten(Color, float): Color`

Lightens a Color object by a given factor.

Supplied lighten factor should be provided as a number >= 0, where 0 is no increase and 1 is a 100% increase (double).

The lightness will not exceed 100%, or subceed 0%.

### `darken(Color, float): Color`

Darkens a Color object by a given factor.

Supplied darken factor should be provided as a number between 0 and 1, where 0 is no decrease and 1 is a 100% decrease (black).

The lightness will not exceed 100%, or subceed 0%.

### `saturate(Color, float): Color`

Increases saturation of a Color object by a given factor.

Supplied saturation factor should be provided as a number >= 0, where 0 is no increase in saturation and 1 is a 100% increase in saturation (doubled saturation).

The saturation will not exceed 100%, or subceed 0%.

### `desaturate(Color, float): Color`

Desaturates a Color object by a given factor.

Supplied desaturation factor should be provided as a number between 0 and 1, where 0 is no decrease in saturation and 1 is a 100% decrease in saturation.

The saturation will not exceed 100%, or subceed 0%.

### `fade(Color, float): Color`

Increases the opacity of a Color object by a given factor.

Supplied factor should be between 1 and 0, where 1 makes the color fully transparent, and 0 creates 0 change in opacity.

The alpha value will not exceed 1, or subceed 0.

### `opaquer(Color, float): Color`

Decreases the opacity of a Color object by a given factor.

Supplied factor should be between 0 and 1, where 1 doubles the alpha value (2x more opaque), and 0 means no change in transparency.

The alpha value will not exceed 1, or subceed 0.

### `grayscale(Color): Color`

Converts a Color object to grayscale. (Removes all saturation.)

### `hueShift(Color, int): Color`

Performs a hue shift with the supplied input. Positive for a right shift, negative for a left shift. Input should be an integer between -359 and 359 (but could be any number).

Wrapping (e.g. -180 shift on 90 becomes 270) is performed automatically.

### `toRgb(Color): string`

Converts a Color object to a CSS-interpretable RGBA string, e.g. `rgba(128, 128, 128, 0.75)`.

Note that the alpha is always included, even if it's 1.

### `toHsl(Color): string`

Converts a Color object to a CSS-interpretable HSLA string, e.g. `hsla(325, 75%, 66%, 0.75)`.

Note that the alpha is always included, even if it's 1.

## License

micro-color is licensed under the [MIT License](http://opensource.org/licenses/MIT).

Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).

Original project created with ♥ by [@robinweser](http://weser.io) and all the great contributors.
