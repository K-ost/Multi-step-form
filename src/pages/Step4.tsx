import { Link } from "react-router-dom"
import Btn from "../components/Btn"
import FooterBtns from "../components/FooterBtns"
import PageHead from "../components/PageHead"
import { useAppSelector } from "../store/hooks"
import styled from "styled-components"
import AddonItemBox, { AddonList } from "../components/AddonItemBox"
import { priceCount } from "../helpers"

// Styles
const Info = styled.div`
  background: var(--color-magnolia);
  border-radius: 10px;
  margin: 0 0 20px;
  padding: 20px;
`
const InfoTariff = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: var(--color-cool-gray);
    font-size: 14px;
  }
`
const title = `
  color: var(--color-marine-blue);
  font-weight: 500;
`
const InfoTariffTitle = styled.div`
  ${title}
  margin: 0 0 4px;
`
const InfoTariffPrice = styled.div`${title}`

const Step4: React.FC = () => {
  const { plan, period, addons } = useAppSelector(state => state.app)
  
  // Tariff price
  const tariffPrice = priceCount(plan?.price!, period)

  // Total price
  const totalSum = plan?.price! + addons.reduce((acum, el) => acum += el.price, 0)

  return (
    <div>
      <PageHead title="Finishing up" text="Double check everything looks OK before confirming." />

      <Info>
        <InfoTariff>
          <div>
            <InfoTariffTitle>{plan?.name} ({period ? 'Yearly' : 'Monthly'})</InfoTariffTitle>
            <Link to="/step2">Change</Link>
          </div>
          <InfoTariffPrice>
            ${tariffPrice}/{period ? 'yr' : 'mo'}
          </InfoTariffPrice>
        </InfoTariff>
          
        {(addons.length > 0) && 
          <AddonList>
            {addons.map(el => <AddonItemBox key={el.title} title={el.title} price={el.price} />)}
          </AddonList>
        }
      </Info>

      <AddonItemBox title={`Total (per ${period ? 'year' : 'month'})`} price={totalSum} total />

      <FooterBtns>
        <Btn to="/step3" name="Go back" color="link" />
        <Btn to="/step5" name="Confirm" color="purple" />
      </FooterBtns>
    </div>
  )
}

export default Step4
