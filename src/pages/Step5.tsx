import styled from "styled-components"
import icon from "../assets/icon-thank-you.svg"

// Styles
const Success = styled.div`
  color: var(--color-cool-gray);
  padding: 80px 0;
  text-align: center;
  img {
    display: block;
    margin: 0 auto 30px;
  }
  @media screen and (max-width: 900px) {
    padding: 40px 0;
  }
`

const Step5: React.FC = () => {
  return (
    <Success>
      <img src={icon} alt="" />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </Success>
  )
}

export default Step5
