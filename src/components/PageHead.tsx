import styled from "styled-components"

interface IPageHead {
  title: string
  text?: string
}

// Styled
const Pagehead = styled.div`
  margin: 0 0 36px;
  @media screen and (max-width: 900px) {
    margin: 0 0 16px;
  }
`
const PageheadText = styled.div`
  color: var(--color-cool-gray);
  margin: 0;
`

const PageHead: React.FC<IPageHead> = ({ title, text }) => {
  return (
    <Pagehead>
      <h1>{title}</h1>
      {text && <PageheadText>{text}</PageheadText>}
    </Pagehead>
  )
}

export default PageHead
