# @alckor127/react-button-export-excel

> Button component to export a json array to excel.

[![NPM](https://img.shields.io/npm/v/@alckor127/react-button-export-excel.svg)](https://www.npmjs.com/package/@alckor127/react-button-export-excel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @alckor127/react-button-export-excel
```

## Usage

```jsx
import React, { Component } from 'react'

import { ButtonExportExcel } from '@alckor127/react-button-export-excel'
import '@alckor127/react-button-export-excel/dist/index.css'

const data = [
  { name: 'John Doe', sex: 'M', age: 28 },
  { name: 'Jane Doe', sex: 'F', age: 27 }
]

class App extends Component {
  render() {
    return (
      <ButtonExportExcel outline data={data} filename='example'>
        ¡Export now!
      </ButtonExportExcel>
    )
  }
}
```

## Props

- `data` - is the the json array for the export.
- `filename` - is the file name.
- `outline` - is the outline style from button.
- `innerRef` - is the reference from react.
- `disabled` - is when the button is disabled.
- `dark` - is the dark style from button.
- `light` - is the light style from button.

## License

MIT © [Alckor127](https://github.com/Alckor127)
