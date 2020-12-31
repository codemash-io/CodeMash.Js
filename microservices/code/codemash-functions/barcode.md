# Barcode

Calling through: ExecuteFunction \(API\).

Needed params: Id, Meta.

Meta keys:

| key | value |
| :--- | :--- |
| data | data to be encoded |
| outputDirectory | \(Optional\) will override output directory set in function config. By default will create in a temp folder \(leave it as empty to set into temp folder if later want to add to record\). |
| outputName | \(Optional\) created image name. By default will have ID as name. |
| text | \(Optional\) text that will be visible near the barcode. If empty, data will be set as text. |

Config:

| `format` | code128 | `String` |
| :--- | :--- | :--- |
| `width` | `2` | `Number` |
| `height` | `100` | `Number` |
| `displayValue` | `true` | `Boolean` |
| `text` | `undefined` | `String` |
| `fontOptions` | `""` | `String` |
| `font` | `"monospace"` | `String` |
| `textAlign` | `"center"` | `String` |
| `textPosition` | `"bottom"` | `String` |
| `textMargin` | `2` | `Number` |
| `fontSize` | `20` | `Number` |
| `background` | `"#ffffff"` | `String (CSS color)` |
| `lineColor` | `"#000000"` | `String (CSS color)` |
| `margin` | `10` | `Number` |
| `marginTop` | `undefined` | `Number` |
| `marginBottom` | `undefined` | `Number` |
| `marginLeft` | `undefined` | `Number` |
| `marginRight` | `undefined` | `Number` |

Different formats:

[https://codepen.io/lindell/pen/eZKBdO?editors=1010](https://codepen.io/lindell/pen/eZKBdO?editors=1010)

