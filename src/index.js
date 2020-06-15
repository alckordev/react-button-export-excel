import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import XLSX from 'xlsx'
import styles from './styles.module.css'

const defaultProps = {
  outline: false,
  disabled: false,
  dark: false,
  light: false
}

const propType = {
  data: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'green-light', 'green-dark']),
  outline: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool
}

const ButtonExportExcel = ({
  data,
  filename,
  outline,
  innerRef,
  children,
  disabled,
  dark,
  light
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return
    } else {
      handleExport(e)
    }
  }

  const handleExport = (e) => {
    e.preventDefault()

    const workSheet = XLSX.utils.json_to_sheet(data)
    const workBook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workBook, workSheet, 'Hoja 1')
    XLSX.writeFile(workBook, `${filename}.xlsx`)
  }

  const className = classNames({
    [styles.btn]: true,
    [styles.btn_dark]: dark,
    [styles.btn_light]: light,
    [styles.btn_outline]: outline,
    [styles.disabled]: disabled
  })

  return (
    <button
      ref={innerRef}
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

ButtonExportExcel.defaultProps = defaultProps
ButtonExportExcel.propType = propType

export { ButtonExportExcel }
