import { Link } from "react-router-dom"
import styled from "styled-components"

type ColorType = "primary" | "purple" | "link"

interface IBtn {
  name: string
  type?: "submit" | "button"
  to?: string
  color: ColorType
}

// Styled
const stylesForButton = (color: ColorType) => `
  background: ${color === 'primary' ? 'var(--color-marine-blue)' : color === 'purple' ? 'var(--color-purplish-blue)' : '0'};
  border: 0;
  border-radius: 6px;
  color: ${color !== 'link' ? 'var(--color-white)' : 'var(--color-cool-gray)'};
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs);
  font-family: var(--ff);
  line-height: 26px;
  padding: 10px ${color !== 'link' ? '24px' : '0' };
  transition: all 200ms ease-in-out;
  text-decoration: none;
  outline: none;
  --webkit-appearance: none;
  &:hover {
    ${color !== 'link' ? 'opacity: 0.85;' : 'color: var(--color-marine-blue);'}
  }
`
const Button = styled.button<{ $color: ColorType }>`
  ${props => stylesForButton(props.$color)}
`
const StyledLink = styled(Link)<{ $color: ColorType }>`
  ${props => stylesForButton(props.$color)}
`

const Btn: React.FC<IBtn> = ({ color, name, to, type = "button" }) => {
  if (to) {
    return <StyledLink to={to} $color={color}>{name}</StyledLink>
  }
  return <Button type={type} $color={color}>{name}</Button>
}

export default Btn
