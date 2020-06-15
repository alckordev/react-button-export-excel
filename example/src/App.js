import React from 'react'

import { ButtonExportExcel } from 'react-button-export-excel'
import 'react-button-export-excel/dist/index.css'

const App = () => {
  return (
    <ButtonExportExcel
      outline
      data={[
        { name: 'Francisco', sex: 'M' },
        { name: 'Ethel', sex: 'F' }
      ]}
      filename='thismycomponent'
    >
      ¡Exportar!
    </ButtonExportExcel>
  )
}

export default App
