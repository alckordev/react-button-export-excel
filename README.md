# react-button-export-excel

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-button-export-excel.svg)](https://www.npmjs.com/package/react-button-export-excel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
  { name: 'Francisco Luis', sex: 'M', age: 28 },
  { name: 'Ethel Milagros', sex: 'F', age: 27 }
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

- data is the the json array for export.
- filename is the file name.
- outline is the outline style for button.
- innerRef is the ref.
- disabled is when the button is disabled.
- dark is the dark style for button.
- light is the light style for button.

## License

MIT © [Alckor127](https://github.com/Alckor127)
