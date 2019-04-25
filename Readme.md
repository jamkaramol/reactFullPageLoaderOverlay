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
import { Loader } from "react-full-page-loader-overlay";

const Example = () => {
   return (
      <Loader show={true}  />
   );
}

export default Example;
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

## Author
Amol B Jamkar (full stack developer)
jamkar.amol@gmail.com

[LinkedIn profile]


## License

Free to use 


   [ReactJS]: <https://reactjs.org/>
   [LinkedIn profile]: <https://www.linkedin.com/in/amol-jamkar-8ab611103/>
