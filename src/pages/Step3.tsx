import FooterBtns from "../components/FooterBtns"
import Btn from "../components/Btn"
import PageHead from "../components/PageHead"
import Addon from "../components/Addon"
import { AddonType } from "../types"


// Data
const dataAddons: AddonType[] = [
  { id: 1, title: "Online service", text: "Access to multiplayer games", price: 1 },
  { id: 2, title: "Larger storage", text: "Extra 1TB of cloud save", price: 2 },
  { id: 3, title: "Customizable profile", text: "Custom theme on your profile", price: 2 },
]


const Step3: React.FC = () => {
  return (
    <div>
      <PageHead title="Pick add-ons" text="Add-ons help enhance your game experience." />

      {dataAddons.map(el => <Addon key={el.id} price={el.price} text={el.text!} title={el.title} />)}

      <FooterBtns>
        <Btn to="/step2" name="Go back" color="link" />
        <Btn to="/step4" name="Next step" color="primary" />
      </FooterBtns>
    </div>
  )
}

export default Step3
