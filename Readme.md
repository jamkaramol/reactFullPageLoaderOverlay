# Loader for ReactJS

  - A attractive loader for your react project.
  - Using CSS-3 animations.
  - Full page loader with shadow overlay 

![Demo](data/demo.gif)


## Tech
* [ReactJs]
* CSS 3 animation


## Installation

```
npm i react-full-page-loader-overlay
```
## Example 


````
import React from "react";
import { Loader } from "loader";

const Example = () => {
   return (
      <Loader show={true}  />
   );
}
````

## All props information 


| Props | values |Description |
| ----- | ------ | ------ |
| show | `true` or `false` Boolean | Show or hide loader |
| fillIn | `true` or `false` Boolean | Background Transparent or White |
| design | `1`, `2` or `3` Number | Total 3 designs, if nothing specified it will show default design |
| centerBorder | Hex color code or color name  | Default is red  | 
| leftBorder | Hex color code or color name | Default is green |
| rightBorder | Hex color code or color name | Default is yellow |



   [ReactJS]: <https://reactjs.org/>
