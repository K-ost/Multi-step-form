import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setPeriod } from "../store/appSlice"

// Styles
const Switch = styled.div`
  background: var(--color-alabaster);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin: 30px 0 0;
  padding: 12px;
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    margin: 10px 0 0;
  }
`
const SwitchMonth = styled.span<{ $active: boolean }>`
  background: var(--color-alabaster);
  border-radius: 6px;
  color: var(--color-${props => props.$active ? 'marine-blue' : 'cool-gray'});
  padding: 12px;
`
const Toggle = styled.input.attrs({ type: "checkbox" })`
  background: var(--color-marine-blue);
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  height: 20px;
  display: inline-block;
  margin: 0;
  padding: 0;
  outline: none;
  position: relative;
  width: 38px;
  -webkit-appearance: none;
  &::before {
    background: var(--color-white);
    border-radius: 12px;
    content: '';
    display: block;
    height: 12px;
    left: 4px;
    top: 4px;
    width: 12px;
    position: absolute;
    transition: all 200ms linear;
  }
  &:checked::before {
    transform: translateX(18px);
  }
`

const Switcher: React.FC = () => {
  const dispatch = useAppDispatch()
  const period = useAppSelector(state => state.app.period)

  return (
    <Switch>
      <label>
        <SwitchMonth $active={!period}>Monthly</SwitchMonth>
        <Toggle onChange={(e) => dispatch(setPeriod(e.target.checked))} defaultChecked={period} />
        <SwitchMonth $active={period}>Yearly</SwitchMonth>
      </label>
    </Switch>
  )
}

export default Switcher
