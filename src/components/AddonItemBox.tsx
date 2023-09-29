import styled from "styled-components"
import { priceCount } from "../helpers"
import { useAppSelector } from "../store/hooks"

interface IAddonItemBox {
  title: string
  price: number
  total?: boolean
}

// Styles
export const AddonList = styled.div`
  border-top: 1px solid var(--color-light-gray);
  margin: 20px 0 0;
  padding: 20px 0 0;
`
const AddonItemPrice = styled.div`
  color: var(--color-marine-blue);
`
const AddonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px;
  color: var(--color-cool-gray);
  font-size: 14px;
  &:last-child {
    margin: 0;
  }
  &.total {
    padding: 0 15px;
    ${AddonItemPrice} {
      color: var(--color-purplish-blue);
      font-size: 20px;
      font-weight: 500;
    }
  }
`

const AddonItemBox: React.FC<IAddonItemBox> = ({ price, title, total }) => {
  const period = useAppSelector(state => state.app.period)
  const priceEL = priceCount(price, period)

  return (
    <AddonItem className={total ? 'total' : ''}>
      <div>{title}</div>
      <AddonItemPrice>
        ${priceEL}/{period ? 'yr' : 'mo'}
      </AddonItemPrice>
    </AddonItem>
  )
}

export default AddonItemBox
