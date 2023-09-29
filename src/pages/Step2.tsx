import TariffPlan from "../components/TariffPlan"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setPlan } from "../store/appSlice"
import PageHead from "../components/PageHead"
import img1 from "../assets/icon-arcade.svg"
import img2 from "../assets/icon-advanced.svg"
import img3 from "../assets/icon-pro.svg"
import FooterBtns from "../components/FooterBtns"
import Btn from "../components/Btn"
import { TariffType } from "../types"
import { useEffect } from "react"
import Switcher from "../components/Switcher"


// Data
const dataTariffs: TariffType[] = [
  { id: 1, name: "Arcade", img: img1, price: 9, value: "arcade", checked: true },
  { id: 2, name: "Advanced", img: img2, price: 12, value: "advanced", checked: false },
  { id: 3, name: "Pro", img: img3, price: 15, value: "pro", checked: false },
]


const Step2: React.FC = () => {
  const dispatch = useAppDispatch()
  const plan = useAppSelector(state => state.app.plan)

  useEffect(() => {
    if (!plan) {
      dispatch(setPlan({ name: dataTariffs[0].name, price: dataTariffs[0].price }))
    }
  }, [plan, dispatch])

  return (
    <div>
      <PageHead title="Select your plan" text="You have the option of monthly of yearly billing." />

      <div className="row">
        {dataTariffs.map(el => (
          <TariffPlan key={el.id} name={el.name} img={el.img} value={el.value} price={el.price} />
        ))}
      </div>

      <Switcher />

      <FooterBtns>
        <Btn to="/" name="Go back" color="link" />
        <Btn to="/step3" name="Next step" color="primary" />
      </FooterBtns>

    </div>
  )
}

export default Step2
