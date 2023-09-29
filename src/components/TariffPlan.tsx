import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setPlan } from "../store/appSlice"

interface ITariffPlan {
  img: string
  name: string
  price: number
  value: string
}

// Styles
const TariffLabel = styled.label`
  display: block;
  position: relative;
  @media screen and (max-width: 900px) {
    margin: 0 0 12px;
  }
`
const TariffBox = styled.span`
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  cursor: pointer;
  display: block;
  padding: 20px;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: flex-start;
    padding: 15px;
  }
`
const TariffInput = styled.input.attrs({
  type: 'radio',
  name: 'tariffname'
})`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  &:checked + ${TariffBox} {
    background: var(--color-magnolia);
    border-color: var(--color-marine-blue);
  }
`
const TariffTitle = styled.span`
  color: var(--color-marine-blue);
  display: block;
  font-weight: 500;
  margin: 0 0 2px;
`
const TariffImage = styled.img`
  display: block;
  margin: 0 0 40px;
  @media screen and (max-width: 900px) {
    margin: 0 15px 0 0;
  }
`
const TariffPrice = styled.span`
  color: var(--color-cool-gray);
  display: block;
`
const TariffMonths = styled.span`
  color: var(--color-marine-blue);
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
`

const TariffPlan: React.FC<ITariffPlan> = ({ img, name, price, value }) => {
  const dispatch = useAppDispatch()
  const period = useAppSelector(state => state.app.period)
  const plan = useAppSelector(state => state.app.plan)

  // currentPlan
  const currentPlan = plan?.name === name

  return (
    <div className="col-12 col-lg-4">
      <TariffLabel>
        <TariffInput value={value} checked={currentPlan} onChange={() => dispatch(setPlan({ name: name, price }))} />
        <TariffBox>
          <TariffImage src={img} alt="" />
          <div>
            <TariffTitle>{name}</TariffTitle>
            <TariffPrice>${period ? price * 10 : price}/mo</TariffPrice>
            {period && <TariffMonths>Two months free</TariffMonths>}
          </div>
        </TariffBox>
      </TariffLabel>
    </div>
  )
}

export default TariffPlan
