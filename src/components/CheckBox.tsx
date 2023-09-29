import React from 'react'
import styled from 'styled-components'
import check from "../assets/icon-checkmark.svg"

interface ICheckBox {
  checked: boolean
  handler: () => void
}

// Styles
export const Check = styled.input.attrs({ type: "checkbox" })`
  background: url(${check}) -9999px -9999px no-repeat;
  border: 1px solid var(--color-light-gray);
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  outline: none;
  min-width: 20px;
  max-width: 20px;
  height: 20px;
  margin: 0;
  position: relative;
  -webkit-appearance: none;
  &:checked {
    background-color: var(--color-purplish-blue);
    background-position: center center;
    border-color: var(--color-purplish-blue);
  }
`

const CheckBox: React.FC<ICheckBox> = ({ checked, handler }) => {
  return (
    <Check onChange={handler} defaultChecked={checked} />
  )
}

export default CheckBox
