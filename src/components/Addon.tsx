import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import CheckBox, { Check } from "./CheckBox"
import { setAddon } from "../store/appSlice"

interface IAddon {
  price: number
  text: string
  title: string
}

// Styled
const AddonBorder = styled.span`
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`
const AddonBox = styled.div`
  margin: 0 0 15px;
  *:not(${AddonBorder}) {z-index: 10;}
  ${Check} {margin: 0 15px 0 0;}
  ${Check}:checked + ${AddonBorder} {
    background: var(--color-magnolia);
    border-color: var(--color-marine-blue);
  }
`
const AddonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 900px) {
    padding: 15px;
  }
`
const AddonDetails = styled.span`
  display: block;
  flex-grow: 1;
  padding-right: 10px;
`
const AddonTitle = styled.span`
  color: var(--color-marine-blue);
  display: block;
  font-weight: 500;
  margin: 0 0 4px;
`
const AddonText = styled.span`
  color: var(--color-cool-gray);
  display: block;
  font-size: 14px;
`
const AddonPrice = styled.span`
  color: var(--color-purplish-blue);
  display: block;
  font-size: 14px;
`


const Addon: React.FC<IAddon> = ({ price, text, title }) => {
  const period = useAppSelector(state => state.app.period)
  const addons = useAppSelector(state => state.app.addons)
  const dispatch = useAppDispatch()

  // addonExists
  const addonExists = addons.some(el => el.title === title)

  return (
    <AddonBox>
      <AddonLabel>
        <CheckBox handler={() => dispatch(setAddon({title, price}))} checked={addonExists} />
        <AddonBorder></AddonBorder>
        <AddonDetails>
          <AddonTitle>{title}</AddonTitle>
          <AddonText>{text}</AddonText>
        </AddonDetails>
        <AddonPrice>
          +${period ? Number(price) * 10 : price}/
          {period ? 'yr' : 'mo'}
        </AddonPrice>
      </AddonLabel>
    </AddonBox>
  )
}

export default Addon
