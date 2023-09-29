import styled from "styled-components"
import StepItem from "./StepItem"
import bg from '../assets/bg-sidebar-desktop.svg'
import bgMobile from '../assets/bg-sidebar-mobile.svg'

const SidebarBox = styled.aside`
  background: var(--color-purplish-blue) url(${bg}) center bottom no-repeat;
  border-radius: 10px;
  min-width: 270px;
  max-width: 270px;
  padding: 30px;
  @media screen and (max-width: 900px) {
    background-image: url(${bgMobile});
    border-radius: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 170px;
    min-width: 0;
    max-width: none;
  }
`

const Sidebar: React.FC = () => {
  return (
    <SidebarBox>
      <StepItem num="1" title="Your info" uri="/" />
      <StepItem num="2" title="Select plan" uri="/step2" />
      <StepItem num="3" title="Add-ons" uri="/step3" />
      <StepItem num="4" title="Summary" uri="/step4" />
    </SidebarBox>
  )
}
export default Sidebar