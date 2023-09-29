import React from "react"
import styled from "styled-components"

interface IFormControl {
  label: string
  error: string
  type?: 'text' | 'email' | 'tel'
  handler: any
  placeholder?: string
}

// Styles
const FormLine = styled.div`
  margin: 0 0 24px;
  &:last-child {
    margin: 0;
  }
`
const FormTop = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 0 0 6px;
`
const FormLabel = styled.label`
  color: var(--color-marine-blue);
  display: block;
`
const FormError = styled.span`
  color: var(--color-strawberry-red);
  display: block;
`
const FormInput = styled.input<{ $error: boolean }>`
  background: 0;
  border: 1px solid ${props => props.$error ? 'var(--color-strawberry-red) !important' : 'var(--color-light-gray)'};
  border-radius: 6px;
  color: var(--color-marine-blue);
  font-size: var(--fs);
  font-family: var(--ff);
  font-weight: 500;
  line-height: 24px;
  height: 44px;
  outline: none;
  margin: 0;
  padding: 10px 16px;
  width: 100%;
  -webkit-appearance: none;
  &:focus {
    border-color: var(--color-marine-blue);
  }
  &::placeholder {
    color: var(--color-cool-gray);
  }
`

const FormControl: React.FC<IFormControl> = ({ error, label, placeholder, type = 'text', handler }) => {
  return (
    <FormLine>
      <FormTop>
        <FormLabel>{label}</FormLabel>
        <FormError>{error}</FormError>
      </FormTop>
      <FormInput
        type={type}
        placeholder={`e.q. ${placeholder}`}
        {...handler}
        $error={!!error}
      />
    </FormLine>
  )
}

export default FormControl
