import { useLocation } from "react-router-dom"
import styled from "styled-components"

interface IStepItem {
  num: string
  title: string
  uri: string
}

const Stepbox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px;
  &:last-child {margin: 0;}
  @media screen and (max-width: 900px) {
    margin: 0 15px 0 0;
  }
`
const StepboxNum = styled.div<{ $active: boolean }>`
  ${props => props.$active && 'background: var(--color-light-blue);'}
  border: 1px solid ${props => props.$active ? 'var(--color-light-blue)' : 'var(--color-white)'};;
  border-radius: 50%;
  color: ${props => props.$active ? 'var(--color-marine-blue)' : 'var(--color-white)'};
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StepboxDetails = styled.div`
  flex: 1;
  padding-left: 15px;
  text-transform: uppercase;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const StepboxStep = styled.div`
  color: var(--color-light-gray);
  font-size: 13px;
  margin: 0 0 2px;
`
const StepboxTitle = styled.div`
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
`

const StepItem: React.FC<IStepItem> = ({ num, title, uri }) => {
  const { pathname } = useLocation()
  return (
    <Stepbox>
      <StepboxNum $active={pathname === uri}>{num}</StepboxNum>
      <StepboxDetails>
        <StepboxStep>Step {num}</StepboxStep>
        <StepboxTitle>{title}</StepboxTitle>
      </StepboxDetails>
    </Stepbox>
  )
}

export default StepItem
